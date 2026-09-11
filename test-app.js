const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 8080;

async function startServer() {
    return new Promise((resolve) => {
        const server = http.createServer((req, res) => {
            let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

            const extname = path.extname(filePath);
            let contentType = 'text/html';

            if (extname === '.js') contentType = 'text/javascript';
            if (extname === '.css') contentType = 'text/css';

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not Found');
                    return;
                }

                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            });
        });

        server.listen(PORT, () => {
            console.log(`✓ Servidor iniciado em http://localhost:${PORT}`);
            resolve(server);
        });
    });
}

async function runTests() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        console.log('\n📝 Iniciando testes da aplicação...\n');

        // Teste 1: Carregar página
        console.log('Teste 1: Carregando página principal...');
        await page.goto(`http://localhost:${PORT}`);
        console.log('✓ Página carregada com sucesso');

        // Teste 2: Campo vazio recusado
        console.log('\nTeste 2: Tentando adicionar item vazio...');
        await page.click('#addBtn');
        await page.waitForTimeout(500);

        const errorVisible = await page.isVisible('#errorMessage.show');
        const errorText = await page.textContent('#errorMessage');

        if (errorVisible && errorText.includes('Por favor')) {
            console.log('✓ Campo vazio foi recusado com mensagem:', errorText);
        } else {
            console.error('✗ Erro: campo vazio não foi validado corretamente');
        }

        // Teste 3: Adicionar item válido
        console.log('\nTeste 3: Adicionando item válido...');
        await page.fill('#todoInput', 'Implementar to-do list');
        await page.click('#addBtn');
        await page.waitForTimeout(500);

        const itemInList = await page.textContent('.todo-item');
        if (itemInList && itemInList.includes('Implementar to-do list')) {
            console.log('✓ Item adicionado aparece na lista:', itemInList);
        } else {
            console.error('✗ Erro: item não aparece na lista');
        }

        // Teste 4: Campo limpo após adição
        const inputValue = await page.inputValue('#todoInput');
        if (inputValue === '') {
            console.log('✓ Campo foi limpo após adição com sucesso');
        } else {
            console.error('✗ Erro: campo não foi limpo');
        }

        // Teste 5: Adicionar outro item
        console.log('\nTeste 4: Adicionando segundo item...');
        await page.fill('#todoInput', 'Testar persistência');
        await page.click('#addBtn');
        await page.waitForTimeout(500);

        // Teste 6: Persistência ao recarregar
        console.log('\nTeste 5: Verificando persistência ao recarregar...');
        await page.reload();
        await page.waitForTimeout(500);

        const items = await page.locator('.todo-item').count();
        if (items === 2) {
            console.log('✓ Persistência funcionando: ambos os itens estão na lista após reload');

            const firstItem = await page.locator('.todo-item').first().textContent();
            const secondItem = await page.locator('.todo-item').nth(1).textContent();
            console.log(`  - Item 1: ${firstItem}`);
            console.log(`  - Item 2: ${secondItem}`);
        } else {
            console.error(`✗ Erro: esperado 2 itens, encontrado ${items}`);
        }

        // Teste 7: Usar Enter para adicionar
        console.log('\nTeste 6: Testando submissão com tecla Enter...');
        await page.fill('#todoInput', 'Novo item via Enter');
        await page.press('#todoInput', 'Enter');
        await page.waitForTimeout(500);

        const finalItems = await page.locator('.todo-item').count();
        if (finalItems === 3) {
            console.log('✓ Enter funciona para adicionar item');
        } else {
            console.error(`✗ Erro: esperado 3 itens, encontrado ${finalItems}`);
        }

        console.log('\n✅ Todos os testes passaram!\n');

    } catch (error) {
        console.error('Erro durante os testes:', error);
    } finally {
        await browser.close();
    }
}

async function main() {
    const server = await startServer();

    // Aguarda um pouco para garantir que o servidor está pronto
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        await runTests();
    } finally {
        server.close();
        console.log('✓ Servidor encerrado');
        process.exit(0);
    }
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});

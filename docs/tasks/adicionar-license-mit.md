# Task: Adicionar arquivo LICENSE com a licenca MIT

| Campo        | Valor                                                       |
| ------------ | ----------------------------------------------------------- |
| ID           | TASK-0001                                                    |
| Tipo         | Chore / Documentacao                                         |
| Status       | Pronta para desenvolvimento (com 3 pontos em aberto abaixo)  |
| Prioridade   | Media                                                        |
| Estimativa   | ~30 min (1 arquivo novo + 1 secao de README)                 |
| Responsavel  | A definir                                                    |
| Repositorio  | `todo-list` (branch base: `main`)                            |
| Dependencias | Nenhuma tecnica; depende das decisoes em "Pontos em aberto"  |

---

## 1. Contexto e motivacao

O repositorio `todo-list` nao possui arquivo de licenca. Sem licenca explicita, o
codigo publicado e considerado "todos os direitos reservados" por padrao: terceiros
nao tem permissao legal para usar, copiar ou distribuir o projeto, e plataformas como
GitHub e npm nao conseguem exibir a licenca.

A decisao ja tomada e adotar a licenca **MIT** (permissiva, curta, amplamente
reconhecida), com titularidade de **Dionesio Jr.** e ano de copyright **2026**.

## 2. Escopo

### Incluido

1. Criar o arquivo `LICENSE` na raiz do repositorio com o texto integral e literal da MIT.
2. Garantir que o `README.md` da raiz declare que o projeto usa a licenca MIT e aponte
   (via link relativo) para o arquivo `LICENSE`.

### Fora de escopo

- Aplicar cabecalhos de licenca (license headers) nos arquivos de codigo-fonte.
- Adicionar `NOTICE`, `CONTRIBUTING.md` ou `CODE_OF_CONDUCT.md`.
- Publicar o pacote em qualquer registry.
- Revisar licencas de dependencias de terceiros.
- Atualizar o campo `"license"` de `package.json` — ver "Pontos em aberto" (2).

## 3. Estado atual do repositorio (verificado)

No momento da escrita, o repositorio contem **apenas o commit inicial vazio**
(`489bda4 chore: commit inicial vazio`) e **nenhum arquivo versionado**. Logo:

- Nao existe `LICENSE` — sera criado do zero.
- **Nao existe `README.md`** — o criterio de aceite original assume um README que ainda
  nao existe. Ver decisao assumida em "Pontos em aberto" (1).
- Nao existe `package.json`, portanto nao ha metadado de licenca a sincronizar agora.

## 4. Especificacao tecnica

### 4.1 Arquivo `LICENSE`

- **Caminho:** `LICENSE` na raiz do repositorio, **sem extensao** — e o nome que o GitHub
  e as ferramentas de deteccao de licenca reconhecem automaticamente.
- **Fonte canonica do texto:** template MIT do SPDX / choosealicense.com
  (<https://opensource.org/license/mit>). O texto deve ser **copiado literalmente**, sem
  parafrase, sem reformatacao de paragrafos e sem traducao.
- **Preenchimento dos placeholders do template:**
  - `<year>` -> `2026`
  - `<copyright holders>` -> `Dionesio Jr.`
  - Linha resultante, exatamente: `Copyright (c) 2026 Dionesio Jr.`
- **Formato do arquivo:** UTF-8 sem BOM, quebras de linha `LF`, com newline no final.
- **Conteudo esperado:** ver Anexo A. O arquivo deve ser identico ao Anexo A.

### 4.2 Secao de licenca no `README.md`

- **Caminho:** `README.md` na raiz.
- Deve conter uma secao de nivel 2 ao final do documento, em portugues (idioma padrao do
  repositorio), no formato:

  ```markdown
  ## Licenca

  Este projeto esta licenciado sob a licenca MIT. Veja o arquivo
  [LICENSE](LICENSE) para o texto completo.
  ```

- O link deve ser **relativo** (`LICENSE`), nao uma URL absoluta, para funcionar tanto no
  GitHub quanto em clones locais.
- Badge de licenca e opcional e nao e requisito de aceite.

## 5. Criterios de aceite

- [ ] **CA1** — Existe o arquivo `LICENSE` na raiz e ele esta versionado no git
      (`git ls-files LICENSE` retorna `LICENSE`).
- [ ] **CA2** — O conteudo de `LICENSE` e o texto integral e literal da licenca MIT,
      identico ao Anexo A (verificavel com `diff`; nenhuma frase reescrita, omitida ou
      traduzida).
- [ ] **CA3** — A linha de copyright e exatamente `Copyright (c) 2026 Dionesio Jr.`
- [ ] **CA4** — Existe `README.md` na raiz contendo uma secao "Licenca" que declara o uso
      da licenca MIT.
- [ ] **CA5** — Essa secao contem um link relativo funcional para o arquivo `LICENSE`.
- [ ] **CA6** — Nenhum outro arquivo do repositorio e modificado por esta task.

## 6. Como validar

```sh
# CA1
git ls-files LICENSE

# CA2 (comparar com o texto canonico salvo em /tmp/mit-esperado.txt)
diff -u /tmp/mit-esperado.txt LICENSE && echo "LICENSE OK"

# CA3
grep -Fx "Copyright (c) 2026 Dionesio Jr." LICENSE

# CA4 e CA5
grep -n -i "licenca" README.md
grep -F "[LICENSE](LICENSE)" README.md

# CA6
git status --porcelain
```

Verificacao manual adicional: apos o merge, a barra lateral do GitHub deve exibir
"MIT License".

## 7. Pontos em aberto / decisoes assumidas

Estes itens faltavam na descricao original. Foram resolvidos com um padrao seguro para
nao bloquear o desenvolvimento — **confirmar com o solicitante**; se a resposta divergir,
ajustar a task antes de codar.

1. **README inexistente.** O criterio original ("O README menciona...") pressupoe um
   arquivo que ainda nao existe no repositorio.
   *Assumido:* criar um `README.md` minimo (titulo `# todo-list`, uma linha de descricao
   do projeto e a secao "Licenca" da secao 4.2). Alternativa, caso o README esteja sendo
   escrito em outra task: entregar apenas o `LICENSE` e tratar o README como follow-up.
2. **Metadados de projeto.** Nao ha `package.json` hoje. *Assumido:* fora de escopo.
   Quando o `package.json` for criado, ele deve trazer `"license": "MIT"` — registrar como
   item de follow-up.
3. **Grafia do titular.** A task diz "Dionesio Jr."; o autor configurado no git e
   "Dionesio Guerra" (prof.dionesio@gmail.com). *Assumido:* usar literalmente
   "Dionesio Jr." conforme a task. Confirmar se e a grafia juridica desejada, pois o
   titular do copyright tem efeito legal e alteracoes posteriores exigem novo commit.

## 8. Definition of Done

- Todos os criterios de aceite (CA1–CA6) verificados.
- Commit no padrao do repositorio, ex.: `chore: adicionar licenca MIT`.
- Pull request aberto contra `main` e revisado.

---

## Anexo A — Conteudo esperado de `LICENSE`

```text
MIT License

Copyright (c) 2026 Dionesio Jr.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Anexo B — Diagnostico da task original

Texto original avaliado:

> Adicionar arquivo LICENSE com a licenca MIT
>
> - Existe o arquivo LICENSE na raiz do repositorio.
> - O conteudo e o texto integral e literal da licenca MIT, sem parafrasear.
> - O ano do copyright e 2026 e o titular e Dionesio Jr.
> - O README menciona que o projeto usa a licenca MIT e aponta para o arquivo LICENSE.

**Pontos fortes:** objetivo claro; criterios de aceite ja em forma de lista verificavel;
"sem parafrasear" elimina a ambiguidade mais comum em tasks de licenca.

**Campos ausentes que foram preenchidos nesta versao:**

| #  | Lacuna na task original                                                       | Tratamento                  |
| -- | ----------------------------------------------------------------------------- | --------------------------- |
| 1  | Sem contexto/motivacao (por que licenciar agora)                              | Secao 1                     |
| 2  | Nao delimita o que fica **fora** de escopo (headers, NOTICE, metadados)       | Secao 2                     |
| 3  | Assume um `README.md` que nao existe no repositorio                           | Secao 3 e ponto em aberto 1 |
| 4  | Nao define a fonte canonica do texto MIT nem a variante do template           | Secao 4.1                   |
| 5  | Nao define nome/extensao do arquivo (`LICENSE` vs `LICENSE.md`/`.txt`)        | Secao 4.1                   |
| 6  | Nao define o formato exato da linha de copyright                              | Secao 4.1 / CA3             |
| 7  | Nao define encoding, EOL nem newline final — relevante para "literal"         | Secao 4.1                   |
| 8  | Nao define onde, em que idioma e em que formato o README cita a licenca       | Secao 4.2                   |
| 9  | Nao diz se o link do README e relativo ou absoluto                            | Secao 4.2 / CA5             |
| 10 | Sem procedimento de verificacao (comandos)                                    | Secao 6                     |
| 11 | Sem criterio de nao-regressao (nao alterar outros arquivos)                   | CA6                         |
| 12 | Divergencia entre o titular informado e o autor configurado no git            | Ponto em aberto 3           |
| 13 | Sem prioridade, estimativa, responsavel, branch base ou Definition of Done    | Cabecalho e secao 8         |

/**
 * Modelo mínimo de dados de uma tarefa da Todo List.
 *
 * Decisões de formato (ver `docs/tasks/task-09-modelo-minimo-de-dados.md`):
 * - `id`: UUID v4 em string.
 * - `createdAt` / `lastModified`: ISO 8601 em UTC com milissegundos
 *   (`YYYY-MM-DDTHH:mm:ss.sssZ`), ou seja, a saída de `Date#toISOString()`.
 * - `version`: inteiro >= 1, incrementado a cada alteração da tarefa.
 */

/** Instante em ISO 8601 UTC com milissegundos, ex.: `2026-08-20T12:00:00.000Z`. */
export type IsoDateTime = string;

export interface Task {
  /** Identificador único e imutável da tarefa (UUID v4). */
  id: string;
  /** Título curto da tarefa. Não pode ser vazio. */
  title: string;
  /** Detalhamento livre da tarefa. Pode ser string vazia quando não informado. */
  description: string;
  /** Momento de criação. Imutável após a criação. */
  createdAt: IsoDateTime;
  /** Momento da última alteração. Igual a `createdAt` enquanto não houver alteração. */
  lastModified: IsoDateTime;
  /** Número da revisão da tarefa: começa em 1 e aumenta 1 a cada alteração. */
  version: number;
  /** Indica se a tarefa já foi concluída. */
  completed: boolean;
}

/** Campos aceitos na criação de uma tarefa. Os demais são derivados. */
export interface CreateTaskInput {
  title: string;
  description?: string;
  /** Permite injetar id/datas em testes ou na hidratação de dados persistidos. */
  id?: string;
  now?: Date;
}

/**
 * `YYYY-MM-DDTHH:mm:ss.sssZ` — o subconjunto de ISO 8601 usado pelo projeto.
 * Padronizar um único formato evita comparar datas escritas de formas diferentes.
 */
const ISO_DATE_TIME_PATTERN =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

/** Verifica se o valor é um instante ISO 8601 UTC válido (formato e data real). */
export function isIsoDateTime(value: unknown): value is IsoDateTime {
  if (typeof value !== 'string' || !ISO_DATE_TIME_PATTERN.test(value)) {
    return false;
  }
  const parsed = new Date(value);
  // Descarta datas sintaticamente corretas mas inexistentes (ex.: 2026-02-30).
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString() === value;
}

/** Verifica se o valor tem a forma de um `Task` válido. */
export function isTask(value: unknown): value is Task {
  if (typeof value !== 'object' || value === null) return false;
  const task = value as Record<keyof Task, unknown>;
  return (
    typeof task.id === 'string' &&
    task.id.length > 0 &&
    typeof task.title === 'string' &&
    task.title.trim().length > 0 &&
    typeof task.description === 'string' &&
    isIsoDateTime(task.createdAt) &&
    isIsoDateTime(task.lastModified) &&
    typeof task.version === 'number' &&
    Number.isInteger(task.version) &&
    task.version >= 1 &&
    typeof task.completed === 'boolean'
  );
}

/**
 * Cria uma tarefa com todos os campos preenchidos.
 * Toda tarefa nasce pendente (`completed: false`) e na versão 1.
 */
export function createTask({
  title,
  description = '',
  id = crypto.randomUUID(),
  now = new Date(),
}: CreateTaskInput): Task {
  if (title.trim().length === 0) {
    throw new Error('O título da tarefa não pode ser vazio.');
  }
  const timestamp = now.toISOString();
  return {
    id,
    title,
    description,
    createdAt: timestamp,
    lastModified: timestamp,
    version: 1,
    completed: false,
  };
}

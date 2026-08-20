import { describe, expect, it } from 'vitest';

import {
  createTask,
  isIsoDateTime,
  isTask,
  type Task,
} from '../../src/models/task.js';

/** `YYYY-MM-DDTHH:mm:ss.sssZ` (ISO 8601 UTC com milissegundos). */
const ISO_8601_UTC = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const UUID_V4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('Task (modelo mínimo de dados)', () => {
  it('instancia uma tarefa com todos os campos e com os tipos corretos', () => {
    const task: Task = {
      id: '3f1c2c9e-9d3a-4f4b-8f0a-2b6c1d5e7a10',
      title: 'Comprar pão',
      description: 'Padaria da esquina, antes das 18h',
      createdAt: '2026-08-20T12:00:00.000Z',
      lastModified: '2026-08-20T12:30:00.000Z',
      version: 2,
      completed: false,
    };

    expect(Object.keys(task).sort()).toEqual([
      'completed',
      'createdAt',
      'description',
      'id',
      'lastModified',
      'title',
      'version',
    ]);

    expect(typeof task.id).toBe('string');
    expect(typeof task.title).toBe('string');
    expect(typeof task.description).toBe('string');
    expect(typeof task.createdAt).toBe('string');
    expect(typeof task.lastModified).toBe('string');
    expect(typeof task.version).toBe('number');
    expect(typeof task.completed).toBe('boolean');

    expect(Number.isInteger(task.version)).toBe(true);
    expect(task.version).toBeGreaterThanOrEqual(1);
    expect(isTask(task)).toBe(true);
  });

  it('mantém createdAt e lastModified no formato ISO 8601 (UTC)', () => {
    const task = createTask({
      title: 'Comprar pão',
      now: new Date(Date.UTC(2026, 7, 20, 12, 0, 0)),
    });

    expect(task.createdAt).toMatch(ISO_8601_UTC);
    expect(task.lastModified).toMatch(ISO_8601_UTC);
    expect(task.createdAt).toBe('2026-08-20T12:00:00.000Z');
    // O valor volta a ser a mesma data ao ser reinterpretado (round-trip).
    expect(new Date(task.createdAt).toISOString()).toBe(task.createdAt);
  });

  it('cria a tarefa pendente, na versão 1 e com id UUID', () => {
    const task = createTask({ title: 'Comprar pão' });

    expect(task.id).toMatch(UUID_V4);
    expect(task.completed).toBe(false);
    expect(task.version).toBe(1);
    expect(task.description).toBe('');
    expect(task.lastModified).toBe(task.createdAt);
    expect(isTask(task)).toBe(true);
  });

  it('recusa tarefa sem título', () => {
    expect(() => createTask({ title: '   ' })).toThrow(/título/i);
  });

  it('isIsoDateTime aceita apenas ISO 8601 UTC com milissegundos', () => {
    expect(isIsoDateTime('2026-08-20T12:00:00.000Z')).toBe(true);

    expect(isIsoDateTime('2026-08-20')).toBe(false);
    expect(isIsoDateTime('2026-08-20T12:00:00Z')).toBe(false);
    expect(isIsoDateTime('2026-08-20T12:00:00.000-03:00')).toBe(false);
    expect(isIsoDateTime('20/08/2026 12:00')).toBe(false);
    expect(isIsoDateTime('2026-02-30T12:00:00.000Z')).toBe(false);
    expect(isIsoDateTime(1_755_691_200_000)).toBe(false);
  });

  it('isTask rejeita objetos com campo faltando ou com tipo errado', () => {
    const valid = createTask({ title: 'Comprar pão' });

    const { version: _version, ...semVersion } = valid;
    expect(isTask(semVersion)).toBe(false);
    expect(isTask({ ...valid, completed: 'false' })).toBe(false);
    expect(isTask({ ...valid, version: 1.5 })).toBe(false);
    expect(isTask({ ...valid, version: 0 })).toBe(false);
    expect(isTask({ ...valid, createdAt: '20/08/2026' })).toBe(false);
    expect(isTask(null)).toBe(false);
  });
});

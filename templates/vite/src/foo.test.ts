import { describe, expect, test } from 'vitest';

import { foo } from './foo';

describe('foo', () => {
  test('returns foo', () => {
    expect(foo()).toBe('foo');
  });
});

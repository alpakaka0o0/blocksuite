import type { TopLevelBlockModel } from '../../../__internal__/utils/types.js';
import { getXYWH } from '../services/tools-manager.js';

export function xywhArrayToObject(element: TopLevelBlockModel) {
  const [x, y, w, h] = getXYWH(element);
  return { x, y, w, h };
}

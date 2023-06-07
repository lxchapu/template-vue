/**
 * 策略模式
 * [状态, 为true时执行的回调函数]
 */
export type StrategyAction = [boolean, () => void]
/**
 * 策略模式
 * @param actions 多组判断与执行
 * @example
 * exeStrategyAction([
 *   [true, () => {}],
 *   [false, () => {}],
 * ])
 * */
export function exeStrategyAction(actions: StrategyAction[]) {
  actions.some(([bool, action]: StrategyAction) => {
    bool && action()
    return bool
  })
}

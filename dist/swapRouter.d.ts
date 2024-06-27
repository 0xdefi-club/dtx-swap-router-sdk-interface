import { Interface } from '@ethersproject/abi'
import { Currency, Percent, TradeType } from '@uniswap/sdk-core'
import { Trade as V2Trade } from '@uniswap/v2-sdk'
import {
  AddLiquidityOptions,
  FeeOptions,
  MethodParameters,
  PermitOptions,
  Position,
  Trade as V3Trade,
} from '@uniswap/v3-sdk'
import { ApprovalTypes } from './approveAndCall'
import { Trade } from './entities/trade'
import { Validation } from './multicallExtended'
/**
 * Options for producing the arguments to send calls to the router.
 */
export interface SwapOptions {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   */
  slippageTolerance: Percent
  /**
   * The account that should receive the output. If omitted, output is sent to msg.sender.
   */
  recipient?: string
  /**
   * Either deadline (when the transaction expires, in epoch seconds), or previousBlockhash.
   */
  deadlineOrPreviousBlockhash?: Validation
  /**
   * The optional permit parameters for spending the input.
   */
  inputTokenPermit?: PermitOptions
  /**
   * Optional information for taking a fee on output.
   */
  fee?: FeeOptions
}
/**
 * Represents the Uniswap V2 + V3 SwapRouter02, and has static methods for helping execute trades.
 */
export declare abstract class SwapRouter {
  static INTERFACE: Interface
  /**
   * Cannot be constructed.
   */
  private constructor()
  private static encodeV2Swap
  private static encodeV3Swap
  private static encodeSwaps
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  static swapCallParameters(
    trades:
      | Trade<Currency, Currency, TradeType>
      | V2Trade<Currency, Currency, TradeType>
      | V3Trade<Currency, Currency, TradeType>
      | (V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType>)[],
    options: SwapOptions
  ): MethodParameters
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  static swapAndAddCallParameters(
    trades:
      | Trade<Currency, Currency, TradeType>
      | V2Trade<Currency, Currency, TradeType>
      | V3Trade<Currency, Currency, TradeType>
      | (V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType>)[],
    options: SwapOptions,
    position: Position,
    addLiquidityOptions: AddLiquidityOptions,
    tokenInApprovalType: ApprovalTypes,
    tokenOutApprovalType: ApprovalTypes
  ): MethodParameters
  private static getPositionAmounts
}

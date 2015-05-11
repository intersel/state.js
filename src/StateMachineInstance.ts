module fsm {
	/**
	 * Default working implementation of a state machine instance class.
	 *
	 * Implements the `IActiveStateConfiguration` interface.
	 * It is possible to create other custom instance classes to manage state machine state in any way (e.g. as serialisable JSON); just implement the same members and methods as this class.
	 * @class StateMachineInstance
	 * @implements IActiveStateConfiguration
	 */
	export class StateMachineInstance implements IActiveStateConfiguration {
		isTerminated: boolean = false;
		private last: any = {};

		/**
		 * Creates a new instance of the state machine instance class.
		 * @param {string} name The optional name of the state machine instance.
		 */
		constructor(public name: string = "unnamed") { }
		
		/**
		 * Updates the last known state for a given region.
		 * @method setCurrent
		 * @param {Region} region The region to update the last known state for.
		 * @param {State} state The last known state for the given region.
		 */
		setCurrent(region: Region, state: State): void {
			this.last[region.qualifiedName] = state;
		}

		/**
		 * Returns the last known state for a given region.
		 * @method getCurrent
		 * @param {Region} region The region to update the last known state for.
		 * @returns {State} The last known state for the given region.
		 */
		getCurrent(region: Region): State {
			return this.last[region.qualifiedName];
		}

		/**
		 * Returns the name of the state machine instance.
		 * @method toString
		 * @returns {string} The name of the state machine instance.
		 */
		toString(): string {
			return this.name;
		}
	}
}
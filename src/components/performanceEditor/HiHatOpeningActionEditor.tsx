import React from "react";
import { AppComponent } from "../storeComponents";
import { computed } from "mobx";
import { range } from "../../core/helpers/functions";

interface HiHatOpeningActionEditorProps {
	something: string;
}

class HiHatOpeningActionEditor_ extends AppComponent<
	HiHatOpeningActionEditorProps
> {
	@computed get timeline() {
		return this.app.performance.eventTimelines.hihat.hatOpen;
	}

	@computed get axisValues() {
		return range(0, 60, 10);
	}

	render() {
		return <g>{/* <LabelAxis axisValues={this.axisValues} /> */}</g>;
	}
}

export const HiHatOpeningActionEditor = AppComponent.sync(
	HiHatOpeningActionEditor_
);
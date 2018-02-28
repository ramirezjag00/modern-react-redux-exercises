import _ from 'lodash';
import React from 'react';
//sparklines are not large charts but was made to make viewers see the whole chart at a glance
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

//since sparklines doesn't have axes, we made use of the average and showed the units
//a problem that we encountered and solved is how to get the data "props.data" and show/use it
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}
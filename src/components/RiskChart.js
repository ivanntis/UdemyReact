import React from 'react';
//import Plotly from 'plotly.js';

export default class RiskChart extends React.Component {
	state = {
      contr: 2,
      average: 0,
      frames:[]
    }



	componentDidMount() {
		this.Plotly = require('plotly.js');
		console.log(this.Plotly);
		const traces = [];
		traces.push({
			name: 'min-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(0.50 + this.state.contr),
            line: { shape: 'spline', width: 2, color: '#357EC7' },
            hoverinfo: 'y'
		});
		traces.push({
			name: 'max-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(1.50 + this.state.contr),
            fill: 'tonexty',
            fillcolor: '#F0F6FC',
            line: { shape: 'spline', smoothing: 0.5, simply: false, width: 2, color: '#357EC7' },
            hoverinfo: 'y'

		});
		traces.push({
			name: '',
              x: this.generateValueX(1),
              y: this.generateValueX(0.75 + this.state.contr),
              line: { shape: 'spline', width: 0, color: '#BEE8E4' },
              hoverinfo: 'none'

		});
		traces.push({
			 name: 'range',
              x: this.generateValueX(1),
              y: this.generateValueX(1.25 + this.state.contr),
              fill: 'tonexty',
              line: { shape: 'spline', width: 0 },
              marker: { color: '#BEE8E4' },
              hoverinfo: 'none'

		});
		traces.push({
			name: 'avg',
              x: this.generateValueX(1),
              y: this.generateValueX(1 + this.state.contr),
              line: { shape: 'spline', width: 2 },
              marker: { color: '#3EA99F', size: 5 },
              hoverinfo: 'y',
              hoveron: 'points'

		});
		/*const minExt = {
			name: 'min-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(0.50 + this.state.contr),
            line: { shape: 'spline', width: 2, color: '#357EC7' },
            hoverinfo: 'y'
		};
		const maxExt = {
			name: 'max-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(1.50 + this.state.contr),
            fill: 'tonexty',
            fillcolor: '#F0F6FC',
            line: { shape: 'spline', smoothing: 0.5, simply: false, width: 2, color: '#357EC7' },
            hoverinfo: 'y'

		};
		const noName = {
			name: '',
              x: this.generateValueX(1),
              y: this.generateValueX(0.75 + this.state.contr),
              line: { shape: 'spline', width: 0, color: '#BEE8E4' },
              hoverinfo: 'none'

		};
		const range = {
			 name: 'range',
              x: this.generateValueX(1),
              y: this.generateValueX(1.25 + this.state.contr),
              fill: 'tonexty',
              line: { shape: 'spline', width: 0 },
              marker: { color: '#BEE8E4' },
              hoverinfo: 'none'

		};
		const avg = {
			name: 'avg',
              x: this.generateValueX(1),
              y: this.generateValueX(1 + this.state.contr),
              line: { shape: 'spline', width: 2 },
              marker: { color: '#3EA99F', size: 5 },
              hoverinfo: 'y',
              hoveron: 'points'

		};*/

		const layaout = {
            width: 1000,
            height: 600,
            title: 'Contribution Risk 2'
        };

        const config={
            modeBarButtonsToRemove: ['pan2d'],
            displaylogo: false
          };

//		const data = [minExt, maxExt,noName,range,avg];

		this.Plotly.newPlot('myDiv', traces, layaout, config);
		//this.Plotly.plot('myDiv', data, layaout, config, frames: this.state.farmes);
      	//const  hoverInfo = document.getElementById('myOutput');
      	const  myOutputAvg = this.myOutputAvg;
      	const  myOutputMax = this.myOutputMax;
      	const  myOutputMin = this.myOutputMin;
		this.myDivPlo.on('plotly_hover', function(data){
		    
			const dataPointAvg = data.points.filter(function (d) {
      			return d.data.name === 'avg'
    		});
    		const dataPointMin = data.points.filter(function (d) {
      			return d.data.name === 'min-ext'
    		});
    		const dataPointMax = data.points.filter(function (d) {
      			return d.data.name === 'max-ext'
    		});		   
		    myOutputAvg.innerHTML = dataPointAvg[0].y;
		    myOutputMin.innerHTML = dataPointMin[0].y;
		    myOutputMax.innerHTML = dataPointMax[0].y;
		})
		 .on('plotly_unhover', function(data){
		    myOutputAvg.innerHTML = '';
		    myOutputMin.innerHTML = '';
		    myOutputMax.innerHTML = '';
		});
	}

	handleAnimate = () =>{
		const traces = [];
		let randContr = this.state.contr;
			do{
				randContr = Math.floor(Math.random() * 5) + 0 ;
			}while(randContr ==this.state.contr);

		    this.setState(() => ({ contr: randContr }));

		traces.push({
			name: 'min-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(0.50 + this.state.contr),
            line: { shape: 'spline', width: 2, color: '#357EC7' },
            hoverinfo: 'y'
		});
		traces.push({
			name: 'max-ext',
            x: this.generateValueX(1),
            y: this.generateValueX(1.50 + this.state.contr),
            fill: 'tonexty',
            fillcolor: '#F0F6FC',
            line: { shape: 'spline', smoothing: 0.5, simply: false, width: 2, color: '#357EC7' },
            hoverinfo: 'y'

		});
		traces.push({
			name: '',
              x: this.generateValueX(1),
              y: this.generateValueX(0.75 + this.state.contr),
              line: { shape: 'spline', width: 0, color: '#BEE8E4' },
              hoverinfo: 'none'

		});
		traces.push({
			 name: 'range',
              x: this.generateValueX(1),
              y: this.generateValueX(1.25 + this.state.contr),
              fill: 'tonexty',
              line: { shape: 'spline', width: 0 },
              marker: { color: '#BEE8E4' },
              hoverinfo: 'none'

		});
		traces.push({
			name: 'avg',
              x: this.generateValueX(1),
              y: this.generateValueX(1 + this.state.contr),
              line: { shape: 'spline', width: 2 },
              marker: { color: '#3EA99F', size: 5 },
              hoverinfo: 'y',
              hoveron: 'points'

		});
		this.Plotly.animate('myDiv',{
			data:traces,
			trace:[0],
			layaout:{}
			}, 
			{
    		transition: {
      			duration: 500,
      			easing: 'cubic-in-out'
    		}
		});

	}



	generateValueX = (mult) => {
		let ret = [];
		for (let index = 0; index < 100; index++) {
			ret.push(((index * mult)));

		}
		return ret;
	}

	render(){
		return (
			<div>				
				<div id="myDiv" ref={(myDiv) => { this.myDivPlo = myDiv; }}></div>
				<div id="myOutputMax"  ref={(myOutputMax) => { this.myOutputMax = myOutputMax; }}></div>
				<div id="myOutputAvg"  ref={(myOutputAvg) => { this.myOutputAvg = myOutputAvg; }}></div>
				<div id="myOutputMin"  ref={(myOutputMin) => { this.myOutputMin = myOutputMin; }}></div>
				<button onClick={this.handleAnimate}>cambiar</button>
			</div>
			)
		}


}

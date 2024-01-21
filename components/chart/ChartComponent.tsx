import {createChart, ColorType} from 'lightweight-charts';
import React, {useEffect, useRef} from 'react';

export  const ChartComponent = (props: {
    data: any;
    colors?: {
        backgroundColor?: "white" | undefined;
        lineColor?: "#2962FF" | undefined;
        textColor?: "black" | undefined;
        areaTopColor?: "#2962FF" | undefined;
        areaBottomColor?: "rgba(41, 98, 255, 0.28)" | undefined;
    } | undefined;
}) => {
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            if (!chartContainerRef.current) {
                return
            }
            const handleResize = () => {
                chart.applyOptions({width: chartContainerRef.current?.clientWidth});
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: {type: ColorType.Solid, color: backgroundColor},
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({lineColor, topColor: areaTopColor, bottomColor: areaBottomColor});
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div className={"w-full"}
            ref={chartContainerRef}
        />
    );
};

import React, { useEffect } from 'react'
import AOS from "aos";
import Type1 from './Type1';
import Type2 from './Type2';


const data =  [
    {
        head: 'Mine-To-Mill-To-Mine Optimization',
        content: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans"
    },
    {
        head: 'Sustainability',
        content: `Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.

        With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.`
    },
    {
        head: 'Mineral Processing',
        content: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
    },
    {
        head: 'Oil & Gas',
        content: `Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 

        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.`
    }
]
const Body = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>
        {
           data.map((e, i) => (
            (i+1) % 2 === 1 ? <Type1 key={i+1} head={e.head} content={e.content} /> : <Type2 key={i+1} head={e.head} content={e.content} />
           ))
        }
        </>
        
    )
}

export default Body
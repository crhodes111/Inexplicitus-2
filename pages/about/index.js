import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
            <h1 className='ceaser text-amber-500 text-6xl'>About Inexplicitus</h1>
            <br/>
        <p>Founded in the year [REDACTED], A.D., by General [REDACTED] of the [REDACTED] Red Army, Inexplicitus Times was born as an anti-literacy propaganda vehicle.</p>
        <br/>
<p>Today, Inexplicitus serves as your most trusted source for news. We’ve evolved from proud roots to vibrant present, living on the cutting edge of journalism and profit. Every bit of Inexplicitus’s coverage is grounded in traditional news values of fairness and equality. That means we won’t rest until we have misinformed all sides. Across politics, sports, culture and more, Inexplicitus finds truth, or whatever else will satisfy our advertiser's demands. </p>
<br/>
 

<p>Inexplicitus Times. Your world, Inexplained.</p>
<br/>
 

<p>Can’t get enough Inexplicitus? Stick around a while and explore our <Link href={`/`}><b className='cursor-pointer'>archives</b></Link> , demonstrating our coverage from history’s biggest moments, like the bad tuna dish Truman ate moments before nuking Japan, and Genghis Khan's conception. </p>
        </div>
        </div>
        </div>
    )
}

export default About

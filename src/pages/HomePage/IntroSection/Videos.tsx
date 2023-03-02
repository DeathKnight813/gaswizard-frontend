import React from 'react'

/* ----------------------------------------------------------- */

export default function Videos() {
  return (
    <div className="px-6 lg:px-0">
      <h2 className="text-3xl lg:text-4xl font-black text-center text-darkPrimary uppercase leading-snug">
        Do these videos hit home?<br />
        Are <span className="text-primary">high gas prices</span> effecting you also?
      </h2>

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-12 mt-6">
        <div className="col-span-1">
          <iframe className="elementor-video" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Drivers cope with surging gas prices" width="640" height="360" src="https://www.youtube.com/embed/gu2KFFzJr7Q?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgaswizard.finance&amp;widgetid=1" id="widget2"></iframe>
        </div>
        <div className="col-span-1">
          <iframe className="elementor-video" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="UK petrol prices hit new record high after EU Russia oil ban" width="640" height="360" src="https://www.youtube.com/embed/Az2rk412_iM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgaswizard.finance&amp;widgetid=3" id="widget4"></iframe>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center lg:hidden gap-6 mt-6">
        <div>
          <iframe className="elementor-video" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Drivers cope with surging gas prices" width="320" height="200" src="https://www.youtube.com/embed/gu2KFFzJr7Q?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgaswizard.finance&amp;widgetid=1" id="widget2"></iframe>
        </div>
        <div>
          <iframe className="elementor-video" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="UK petrol prices hit new record high after EU Russia oil ban" width="320" height="200" src="https://www.youtube.com/embed/Az2rk412_iM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgaswizard.finance&amp;widgetid=3" id="widget4"></iframe>
        </div>
      </div>
    </div>
  )
}
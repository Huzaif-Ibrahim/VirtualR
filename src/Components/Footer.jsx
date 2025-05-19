const Footer = () => {
  return (
    <div className="py-10">
        <div className="grid grid-cols-1 space-y-10 px-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="flex flex-col space-y-2">
                <h6 className="text-lg font-bold">Resources</h6>
                <a href='/' className="text-lg font-light text-neutral-400">Getting Started</a>
                <a href='/' className="text-lg font-light text-neutral-400">Documentation</a>
                <a href='/' className="text-lg font-light text-neutral-400">Tutorial</a>
                <a href='/' className="text-lg font-light text-neutral-400">API Reference</a>
                <a href='/' className="text-lg font-light text-neutral-400">Community Forums</a>
            </div>

            <div className="flex flex-col space-y-2">
                <h6 className="text-lg font-bold">Platform</h6>
                <a href='/' className="text-lg font-light text-neutral-400">Features</a>
                <a href='/' className="text-lg font-light text-neutral-400">Supported Devices</a>
                <a href='/' className="text-lg font-light text-neutral-400">System Requirments</a>
                <a href='/' className="text-lg font-light text-neutral-400">Downloads</a>
                <a href='/' className="text-lg font-light text-neutral-400">Release Notes</a>
            </div>

            <div className="flex flex-col space-y-2">
                <h6 className="text-lg font-bold">Community</h6>
                <a href='/' className="text-lg font-light text-neutral-400">Events</a>
                <a href='/' className="text-lg font-light text-neutral-400">Meetups</a>
                <a href='/' className="text-lg font-light text-neutral-400">Conferences</a>
                <a href='/' className="text-lg font-light text-neutral-400">Hackathons</a>
                <a href='/' className="text-lg font-light text-neutral-400">Jobs</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
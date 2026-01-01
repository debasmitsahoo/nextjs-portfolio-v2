import { Card, CardContent } from "@/components/ui/card";

export function TechEvents() {
    const events = [
        { name: "GitHub Constellation 2024", role: "Attendee", location: "Bangalore" },
        { name: "Cloud Community Days 2024", role: "Participant", location: "Bhubaneswar" },
        { name: "DevFest Bhubaneswar 2024", role: "Participant", location: "" },
        { name: "Global Entrepreneurship Summit 2025", role: "Attendee", location: "IIT Kharagpur" },
        { name: "Make in Odisha Conclave 2025", role: "Delegate", location: "" },
        { name: "DevFest Bhubaneswar 2025", role: "Volunteer", location: "Event Ops & Social Media" },
        { name: "Cloud Community Days 2025", role: "Volunteer", location: "Event Ops" },
    ];

    return (
        <section className="py-20 bg-muted/20 border-y">
            <div className="container px-4 md:px-6 mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Tech Events & Field Notes</h2>
            </div>
            <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
                <div className="flex px-4 md:px-6 gap-6 w-max">
                    {events.map((event, i) => (
                        <div key={i} className="w-[280px] sm:w-[320px] flex-none group">
                            <div className="border bg-background p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all h-full flex flex-col justify-between min-h-[160px]">
                                <div>
                                    <h3 className="font-semibold text-lg leading-tight mb-2">{event.name}</h3>
                                    <p className="text-sm text-muted-foreground">{event.role}</p>
                                </div>
                                {event.location && <p className="text-xs text-muted-foreground mt-4 font-mono uppercase tracking-wider">{event.location}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

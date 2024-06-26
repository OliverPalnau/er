import {
    BookOpen,
    Users,
    ClipboardList,
    FileText,
    FilePlus,
    LifeBuoy,
    CalendarCheck,
    RefreshCcw,
    BrainCircuit,
    Activity,
  } from "lucide-react";
  
  const features = [
    {
      name: "Regulatory Intelligence",
      description: "Keeping up-to-date with the latest regulations and standards.",
      href: "#",
      icon: BookOpen,
    },
    {
      name: "Regulatory Strategy",
      description: "Developing plans to navigate regulatory requirements efficiently.",
      href: "#",
      icon: BrainCircuit,
    },
    {
      name: "Consultation Meetings",
      description: "Facilitating interactions with health authorities.",
      href: "#",
      icon: Users,
    },
    {
      name: "Regulatory Operations",
      description: "Managing the practical aspects of compliance and submissions.",
      href: "#",
      icon: ClipboardList,
    },
    {
      name: "Clinical Trial Operations",
      description: "Overseeing the administration of clinical trials.",
      href: "#",
      icon: Activity,
    },
    {
      name: "Medical Writing and Publishing",
      description: "Creating necessary documentation and reports. Performing technical document translations.",
      href: "#",
      icon: FileText,
    },
    {
      name: "Product Registration",
      description: "Handling the registration of drugs, medical foods, and medical devices with the relevant government and regulatory authorities.",
      href: "#",
      icon: FilePlus,
    },
    {
      name: "Product Life-Cycle Management",
      description: "Ensuring compliance throughout a product's life cycle.",
      href: "#",
      icon: LifeBuoy,
    },
    {
      name: "Pre-Submission Meetings",
      description: "Preparing for meetings with regulatory bodies.",
      href: "#",
      icon: CalendarCheck,
    },
    {
      name: "Post-Approval Changes",
      description: "Managing changes to a product after it has been approved.",
      href: "#",
      icon: RefreshCcw,
    },
  ];
  
  export default function OurServicesSection() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Regulatory Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide a wide range of services to help you navigate the regulatory landscape and ensure compliance with industry standards.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>

                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
  
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-foreground/40">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions.
        </p>
        <Button className="w-fit" size="lg">
          Get Started
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="branding" className="w-full">
        <AccordionItem value="branding">
          <AccordionTrigger>Will my app show your branding anywhere?</AccordionTrigger>
          <AccordionContent>
            <p>
              Never. Your app will be fully white-labeled with your own name, logo, and design. We stay completely
              invisible.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger>Do I need technical skills to use Acme?</AccordionTrigger>
          <AccordionContent>
            <p>
              No. We handle all the technical setup for you. You can focus on your business while we handle the rest.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="devices">
          <AccordionTrigger>Will my app work on all devices?</AccordionTrigger>
          <AccordionContent>
            <p>Yes. Our app is designed to work on all devices, including iOS and Android.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifcations">
          <AccordionTrigger>Can I send notifications and updates to users?</AccordionTrigger>
          <AccordionContent>
            <p>Yes. You can send notifications and updates to users through our app.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

import { CheckoutEventsData } from "@paddle/paddle-js";
import { formatCurrency } from "@/lib/format-currency";

import { ProductImage } from "@/components/checkout/product-image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface Props {
  checkoutData: CheckoutEventsData;
  expanded?: boolean;
  locale: string | undefined;
}

export function OrderSummary(props: Props) {
  const { checkoutData } = props;

  const currencyCode = checkoutData.currency_code;

  const hasImage = checkoutData.items.some((item) => item.product.image_url);

  return (
    <Accordion
      type="single"
      collapsible
      className="bg-background lg:bg-card mx-auto w-full rounded-lg"
      defaultValue={props.expanded ? "order-summary" : undefined}
    >
      <AccordionItem value="order-summary">
        <AccordionTrigger className="text-md cursor-pointer px-4 hover:no-underline">
          <h3 className="text-md">Show order summary</h3>
        </AccordionTrigger>

        <AccordionContent className="px-4">
          <div className="mt-4">
            <div className="space-y-3">
              {checkoutData.items.map((item) => (
                <div key={item.price_id} className="flex items-center gap-3 text-sm">
                  {hasImage && (
                    <>
                      {item.product.image_url ? (
                        <ProductImage imageUrl={item.product.image_url || ""} name={item.product.name} />
                      ) : (
                        <div className="bg-muted text-muted-foreground flex h-8.5 w-8.5 items-center justify-center rounded-lg text-xl">
                          {item.product.name.charAt(0)}
                        </div>
                      )}
                    </>
                  )}
                  <div className="w-0 min-w-0 flex-1">
                    <p className="truncate font-medium">{item.product.name}</p>

                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground">{formatCurrency(item.totals.total, currencyCode)}</p>
                      <span className="text-muted-foreground">x{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <Separator className="mb-1 w-full" />
              <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p>{formatCurrency(checkoutData.totals.subtotal, currencyCode)}</p>
              </div>

              {checkoutData.totals.discount > 0 && (
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Discount</p>
                  <p>- {formatCurrency(checkoutData.totals.discount, currencyCode)}</p>
                </div>
              )}

              <div className="flex justify-between">
                <p className="text-muted-foreground">Tax</p>
                <p>{formatCurrency(checkoutData.totals.tax, currencyCode)}</p>
              </div>

              <Separator className="my-1 w-full" />
              <div className="flex justify-between">
                <p className="text-muted-foreground">Total</p>
                <p>{formatCurrency(checkoutData.totals.total, currencyCode)}</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

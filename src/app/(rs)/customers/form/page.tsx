import { getCustomer } from "@/lib/queries/getCustomers";

import { BackButton } from "@/components/BackButton";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    // customers/form/[id]

    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              {" "}
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(customer);

      // put customer form component
    } else {
      // new customer form component
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}

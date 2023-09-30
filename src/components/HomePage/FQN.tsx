import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function FQN() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-[60rem] m-auto mb-16 mt-12">
        <h1>General FAQs</h1>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is FlavorFinder?
          </AccordionHeader>
          <AccordionBody>
            FlavorFinder is an online platform that allows you to conveniently
            order food from a variety of local restaurants and eateries in your
            area. We provide a user-friendly interface to browse menus, place
            orders, and have delicious meals delivered to your doorstep or ready
            for pickup.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How does FlavorFinder work?
          </AccordionHeader>
          <AccordionBody>
            <h1>Ordering food on FlavorFinder is easy:</h1>
            <ul>
              <li>Enter your delivery address or choose pickup.</li>
              <li>Browse through the available restaurants and their menus.</li>
              <li>
                Select the items you want to order and customize them if needed.
                Add the items to your cart and proceed to checkout.
              </li>
              <li>
                Choose your preferred payment method and complete your order.
              </li>
              <li>
                Sit back and wait for your delicious meal to arrive or head to
                the restaurant for pickup.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Do I need to create an account to place an order?
          </AccordionHeader>
          <AccordionBody>
            While it's not mandatory to create an account, we recommend doing so
            for a smoother ordering experience. With an account, you can save
            delivery addresses, view order history, and receive exclusive offers
            and updates.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            Can I customize my order (e.g., add special instructions or request
            modifications)?
          </AccordionHeader>
          <AccordionBody>
            Absolutely! When placing your order, you can use the special
            instructions field to request modifications or specify dietary
            preferences. Our platform is designed to accommodate your
            preferences and make sure you get exactly what you want.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}

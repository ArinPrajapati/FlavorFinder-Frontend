import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export default function TimelineWithAvatar() {
  return (
    <div className="w-[42rem] m-auto mb-16">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="textRedGreen">From Kitchen to Your Doorstep</span>
      </h1>
      <p className="text-lg font-normal mb-8 text-gray-500 lg:text-xl dark:text-gray-400">
        A Journey of Flavor and Convenience
      </p>

      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                className="bg-white"
                size="lg"
                src="/public/one.webp"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Order Placement
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              From satisfying late-night cravings to planning a family feast, it
              all begins with the click of a button. Customers simply place
              their orders on our user-friendly website or mobile app. They
              select their preferred restaurant, pick their desired items from
              the menu, and provide the delivery address. With just a few taps,
              their culinary journey begins.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                className="bg-white"
                size="lg"
                src="/public/two.png"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Restaurant Preparation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Behind the scenes, our partner restaurants receive these digital
              orders promptly. Highly skilled chefs and kitchen staff swing into
              action, meticulously preparing each dish with the utmost care.
              Quality ingredients and culinary expertise combine to craft
              mouthwatering creations. The food is then carefully packaged,
              complete with labels specifying the order details, ensuring that
              every bite is as delightful as dining in
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                className="bg-white"
                size="lg"
                src="/public/three.png"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Delivery Dispatch
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              With the orders ready, our dedicated delivery personnel or partner
              drivers are instantly alerted. They arrive at the restaurant,
              ensuring the swift and secure collection of the carefully prepared
              food. Our real-time tracking system is at the customer's
              fingertips, allowing them to follow their meal's journey from the
              restaurant kitchen to their doorstep, adding a layer of excitement
              to their dining experience.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                className="bg-white"
                size="lg"
                src="/public/four.png"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Delivery to Doorstep
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The final act of this gastronomic adventure unfolds as our
              delivery experts navigate the city streets to reach the customer's
              location. Punctuality is our priority, ensuring that each meal
              arrives piping hot and fresh. With a friendly smile, the food is
              handed over at the doorstep, bringing the restaurant's flavors
              right into the heart of our customer's home. It's the ultimate
              convenience - a culinary experience delivered directly to you.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

import { Carousel } from "@material-tailwind/react";

export default function InfiniteCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={2000}
      loop={true}
      className="rounded-xl h-[300px] mt-16"
    >
      <img
        src="https://img.freepik.com/free-photo/grilled-meatball-plate-with-fresh-guacamole-sauce-generated-by-ai_188544-39125.jpg?t=st=1696056605~exp=1696060205~hmac=f486cc20c3b7fb6a6cda1724cc43fa65aeb0bb2d2b0d8066121cfa7b35cd2f75&w=1380"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg?t=st=1696049666~exp=1696053266~hmac=f77c93a787d373bcaec13e196da3e225375a9d750b30060537a1643c411aa01f&w=1380"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/iftar-party-middle-eastern-traditional-lunch-ai-generated-image_511042-1647.jpg?t=st=1696057460~exp=1696061060~hmac=bda13bebf26b7ca552d480613a180df4b802bb3301b22fef3750bfd753c24a2d&w=1380"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/grilled-skewers-meat-vegetables-plate-generated-by-ai_188544-15267.jpg?t=st=1696057604~exp=1696061204~hmac=2035f810ae0efb58cfc014e4068d17cd808ce60d0b0b42622d9bf96246ccef2f&w=1380"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/fresh-salad-plate-with-healthy-homemade-falafel-generated-by-ai_188544-18143.jpg?t=st=1696077430~exp=1696081030~hmac=64925d22cf23cb0f989ed1edec42de30005e7636b44e82bc7c5d4688663e09ca&w=1380"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/mexican-food-ai-generated-image_511042-1770.jpg?t=st=1696077372~exp=1696080972~hmac=30267a28e6fe118e4e9a780e3996b5cb5a519a5311b91a12355140932f01f235&w=1380"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/fresh-vegetarian-pasta-meal-rustic-wooden-table-generated-by-ai_188544-25281.jpg?t=st=1696077328~exp=1696080928~hmac=851805f6ad3f6a3191280b8922483a38b0e466c028f9d50f5acb0e4c271cf6c8&w=1380"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

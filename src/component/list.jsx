import React from "react";

export default function List() {
  const [list, setList] = React.useState([
    {
      city: "Helsinki",
      country: "Finland",
      superHost: false,
      title: "Stylist apartment in center of the city",
      rating: 4.4,
      maxGuests: 3,
      type: "Entire apartment",
      beds: 2,
      photo:
        "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    },
    {
      city: "Turku",
      country: "Finland",
      superHost: false,
      title: "Nice apartment in center of Helsinki",
      rating: 4.2,
      maxGuests: 5,
      type: "Entire apartment",
      beds: 3,
      photo:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Helsinki",
      country: "Finland",
      superHost: true,
      title: "Arty interior in 1900 wooden house",
      rating: 4.5,
      maxGuests: 10,
      type: "Entire house",
      beds: 6,
      photo:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Helsinki",
      country: "Finland",
      superHost: false,
      title: "Apartment next to market spuare",
      rating: 4.48,
      maxGuests: 3,
      type: "Entire apartment",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    },
    {
      city: "Turku",
      country: "Finland",
      superHost: true,
      title: "Villa Aurora guest-house",
      rating: 4.75,
      maxGuests: 9,
      type: "Entire house",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
    },
    {
      city: "Vaasa",
      country: "Finland",
      superHost: true,
      title: "A cosy family house",
      rating: 4.95,
      maxGuests: 6,
      type: "Entire house",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Vaasa",
      country: "Finland",
      superHost: false,
      title: "Lovely Studio near Railway Station",
      rating: 4.68,
      maxGuests: 2,
      type: "Private room",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80",
    },
    {
      city: "Oulu",
      country: "Finland",
      superHost: false,
      title: "Peaceful little home in city center",
      rating: 4.12,
      maxGuests: 6,
      type: "Entire house",
      beds: 3,
      photo:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Oulu",
      country: "Finland",
      superHost: false,
      title: "Beautiful new studio apartment nearby the center",
      rating: 4.49,
      maxGuests: 2,
      type: "Entire apartment",
      beds: 1,
      photo:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
    },
    {
      city: "Oulu",
      country: "Finland",
      superHost: true,
      title: "Cozy woodhouse flat with wooden sauna",
      rating: 4.38,
      maxGuests: 4,
      type: "Entire house",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80",
    },
    {
      city: "Vaasa",
      country: "Finland",
      superHost: false,
      title: "Brand new studio apartment near the harbour",
      rating: 4.89,
      maxGuests: 6,
      type: "Entire apartment",
      beds: 3,
      photo:
        "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Helsinki",
      country: "Finland",
      superHost: false,
      title: "Beautiful and comfortable old wooden house",
      rating: 4.63,
      maxGuests: 10,
      type: "Entire house",
      beds: null,
      photo:
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    },
    {
      city: "Turku",
      country: "Finland",
      superHost: false,
      title: "Turku Nordic Home near city center",
      rating: 4.24,
      maxGuests: 5,
      type: "Entire apartment",
      beds: 3,
      photo:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80",
    },
    {
      city: "Turku",
      country: "Finland",
      superHost: true,
      title: "Nice 2 room apartment close to everything",
      rating: 4.34,
      maxGuests: 6,
      type: "Entire apartment",
      beds: 3,
      photo:
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80",
    },
  ]);
  return (
    <React.Fragment>
      <div className="flex items-center justify-between py-24">
        <h2 className="text-3xl font-semibold">Stays in Finland</h2>
        <p className="">{list.length} stays</p>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-5">
        {list?.map((i, key) => (
          <div key={key}>
            <div className="">
              <div
                className="h-80 rounded-xl bg-cover"
                style={
                  ({ width: "380px" }, { backgroundImage: `url(${i.photo})` })
                }
              ></div>
              <div className="flex justify-between my-6 ">
                <div className="flex space-x-3">
                  {i.superHost ? (
                    <React.Fragment>
                      <p className="border border-gray-400 rounded-lg px-3">
                        Superhost
                      </p>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  <p className="text-gray-400">{i.type}</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p>{i.rating}</p>
                </div>
              </div>
              <p>{i.title}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

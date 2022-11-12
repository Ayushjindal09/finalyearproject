import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "j2h7dlc3",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skDj56UHMLn56EAg9X7enNDowmbp1fB3yJ39WixaeVPVdfvNU351xlKb4kWdARsZcuyg7RTuTVMUNRWpbBkeb6WeZmnsKt0H31rlmcfI3NsqSXXk131uC3AJUaEyUCu8ukmePCFmsw1Cfry7VZOz2dsX1O6tWOA45M8VS3ekbe4xhN6gP6ZJ",
  useCdn: false,
});

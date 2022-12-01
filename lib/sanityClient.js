import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "j2h7dlc3",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skIebYscinQlkeiZqb8CORjx3Fv1O3LlmQIRFmlKomw1Ksb75y7wKCFtGqwCIAWONoCJUGEcZRJ7HPOkBtExAi8sCNW7ddIZfCCSfhF6NKBCEqiE2uuhVll2NiqfjfjQRuwVq3hucWYO9qnglstHvwZ77c4MxzCa48qfBFTSB1GkO3MclJi8",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

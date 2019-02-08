const faker =  require('faker');

export const mockData =  {
  user: {
    signUpPhoneNumberError: {
      firstName: "assssss",
      lastName: "Ilupeju, Lagos",
      otherName: "Wale",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpFirstnameError: {
      firstName: "",
      lastName: "Ilupeju, Lagos",
      otherName: "Wale",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpLastnameError: {
      firstName: "Saheed",
      lastName: "",
      otherName: "Wale",
      phoneNumber: "09090909023",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpOthernameError: {
      firstName: "Saheed",
      lastName: "Shittu",
      otherName: "",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpPassportUrlError: {
      firstName: "Saheed",
      lastName: "Shittu",
      otherName: "Ade",
      phoneNumber: "08012121212",
      passportUrl: "",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpPasswordError: {
      firstName: "Saheed",
      lastName: "Shittu",
      otherName: "Ade",
      phoneNumber: "09090909012",
      passportUrl: "wwwwwwwwwww",
      email: "wale@gmail.com",
      password: "wan"
    },
    signUp: {
      firstName: "Saheed",
      lastName: "Shittu",
      otherName: "Adewale",
      phoneNumber: "08065121234",
      passportUrl: "https://passorturl.io",
      email: faker.internet.email(),
      password: "041419122"
    },
    signIn: {
      email: "kolawole.kola@gmail.com",
      password: "Shetima1234",
    },
    signInPasswordError: {
      email: faker.internet.email(),
      password: ""
    },
    signInEmailError: {
      email: "",
      password: "041419122"
    },
    signInError: {
      email: faker.internet.email(),
      password: "041419122"
    },
    partiesLogoUrlError: {
      name: "Action Congress",
      hqAddress: "12, Oshodi, Lagos, Nig",
      logoUrl: ""
    },
    partiesNameError: {
      name: "",
      hqAddress: "12, Oshodi, Lagos, Nig",
      logoUrl: "https://www.adewale.com"
    },
    partiesHqAddressError: {
      name: "Adewale",
      hqAddress: "",
      logoUrl: "https://www.adewale.com"
    },
    parties: {
      name: faker.name.findName(),
      hqAddress: "12, Obanikoro Lagos, Nigeria", 
      logoUrl: "https://www.adewale.com",
      userId: 1
    },
    editParties: {
      name: faker.name.findName()
    },
    nameError: {
      type: "Action Congress",
      name: ""
    },
    typeError: {
      type: "",
      name: "presidential"
    },
    offices: {
      type: "federal",
      name: "presidential",
      userId: 1
    },
    partyTest: {
      name: faker.name.findName(),
      hqAddress: "12, Obanikoro Lagos, Nigeria", 
      logoUrl: "https://www.adewale.com",
      userId: 7
    }
  }
};

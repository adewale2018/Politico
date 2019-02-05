const faker =  require('faker');

export const mockData =  {
  user: {
    signUpPhoneNumberError: {
      firstname: "assssss",
      lastname: "Ilupeju, Lagos",
      othername: "Wale",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpFirstnameError: {
      firstname: "",
      lastname: "Ilupeju, Lagos",
      othername: "Wale",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpLastnameError: {
      firstname: "Saheed",
      lastname: "",
      othername: "Wale",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpOthernameError: {
      firstname: "Saheed",
      lastname: "Shittu",
      othername: "",
      phoneNumber: "090909090",
      passportUrl: "www.ggogle.com",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpPassportUrlError: {
      firstname: "Saheed",
      lastname: "Shittu",
      othername: "Ade",
      phoneNumber: "08012121212",
      passportUrl: "",
      email: "wale@gmail.com",
      password: "shittu"
    },
    signUpPasswordError: {
      firstname: "Saheed",
      lastname: "Shittu",
      othername: "Ade",
      phoneNumber: "09090909012",
      passportUrl: "wwwwwwwwwww",
      email: "wale@gmail.com",
      password: "wan"
    },
    signUp: {
      firstname: "Saheed",
      lastname: "Shittu",
      othername: "Adewale",
      phoneNumber: "08065121234",
      passportUrl: "https://passorturl.io",
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
      name: "Adewale",
      hqAddress: "12, Obanikoro Lagos, Nigeria", 
      logoUrl: "https://www.adewale.com"
    },
    editParties: {
      name: 'Boluwatife'
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
      name: "presidential"
    }
  }
};

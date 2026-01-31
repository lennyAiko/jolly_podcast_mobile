import { useRegistrationStep } from "@/store/registrationStore";
import { registrationScreens } from "@/utils/data";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AvatarScreen from "./_screens/AvatarScreen";
import OtpScreen from "./_screens/OtpScreen";
import PersonalizationScreen from "./_screens/PersonalizationScreen";
import PhoneScreen from "./_screens/PhoneScreen";
import ProfileScreen from "./_screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Register = () => {
  const currentStep = useRegistrationStep();

  const [screen, setScreen] = useState(
    registrationScreens[currentStep - 1].title,
  );

  const getScreenName = (step: number) => {
    const index = Math.max(
      0,
      Math.min(step - 1, registrationScreens.length - 1),
    );
    return registrationScreens[index].title;
  };

  useEffect(() => {
    setScreen(getScreenName(currentStep));
  }, [currentStep]);

  switch (screen) {
    case registrationScreens[0].title:
      return <PhoneScreen />;
    case registrationScreens[1].title:
      return <OtpScreen />;
    case registrationScreens[2].title:
      return <ProfileScreen />;
    case registrationScreens[3].title:
      return <PersonalizationScreen />;
    case registrationScreens[4].title:
      return <AvatarScreen />;
  }
};

export default Register;

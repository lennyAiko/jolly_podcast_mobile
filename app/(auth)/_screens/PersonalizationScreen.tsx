import { useRegistrationData } from "@/store/registrationStore";
import { icons, images } from "@/utils";
import { personalizationData } from "@/utils/data";
import { ResizeMode } from "expo-av";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PersonlizedView = ({
  title,
  onPress,
  isPersonalized,
}: {
  title: string;
  onPress?: () => void;
  isPersonalized: boolean;
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`flex font-nunito flex-row gap-2 items-center px-4 py-2 rounded-2xl border  ${isPersonalized ? "bg-secondary-400 border-secondary-400" : "bg-white border-secondary-400"}`}
  >
    <Text
      className={`${isPersonalized ? "text-white" : "text-secondary-300"}  text-sm font-nunito`}
    >
      {title}
    </Text>
    <Image
      source={isPersonalized ? icons.close : icons.add}
      className={`${isPersonalized ? "size-4 w-[10px]" : "size-3"}`}
      tintColor={`${isPersonalized ? "#fff" : "#000"}`}
    />
  </TouchableOpacity>
);

const PersonalizationScreen = () => {
  const registrationData = useRegistrationData();

  const [personalizations, setPersonalizations] = useState<string[]>([]);

  const handleSelected = (title: string) => {
    if (personalizations.includes(title)) {
      setPersonalizations((prev) => prev.filter((item) => item !== title));
      return;
    }
    setPersonalizations((prev) => [...prev, title]);
  };

  return (
    <View className="w-full h-full">
      <Image
        source={images.gradientBg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode={ResizeMode.COVER}
      />
      <View className="px-8">
        <View className="flex flex-col gap-1 items-start my-2 w-full">
          <Image
            source={icons.headphones}
            className="size-40"
            resizeMode={ResizeMode.CONTAIN}
          />
          <Text className="text-xl text-white text-start font-nunito-bold">
            Welcome, {registrationData.firstName || "Lennox"}
          </Text>
          <Text className="my-2 text-sm text-white text-start font-nunito">
            Personalize your Jolly experience by selecting your top interest and
            favorite topics.
          </Text>
        </View>
        <View className="flex flex-row flex-wrap gap-4 justify-center items-center">
          {personalizationData.map((item) => (
            <PersonlizedView
              key={item.id}
              title={item.title}
              onPress={handleSelected.bind(null, item.title)}
              isPersonalized={personalizations.includes(item.title)}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => {}}
          disabled={false}
          className="flex justify-center items-center py-4 my-10 w-full rounded-full bg-secondary-400 font-nunito-bold"
        >
          {false ? (
            <ActivityIndicator className="text-white size-3" />
          ) : (
            <Text className="text-white font-nunito-bold">Continue</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalizationScreen;

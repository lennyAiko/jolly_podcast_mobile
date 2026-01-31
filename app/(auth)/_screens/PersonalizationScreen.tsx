import { icons, images } from "@/constants";
import { personalizationData } from "@/constants/data";
import { useRegistrationData } from "@/store/registrationStore";
import { ResizeMode } from "expo-av";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const PersonlizedView = ({ title }: { title: string }) => (
  <View className="">
    <Text>{title}</Text>
  </View>
);

const PersonalizationScreen = () => {
  const registrationData = useRegistrationData();

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
      <View className="flex-1 justify-start items-center px-8">
        <FlatList
          data={personalizationData}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <PersonlizedView title={item.title} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View className="flex flex-col gap-1 items-start my-2 w-full">
              <Image
                source={icons.jollyicon2}
                className="-mb-8 size-40"
                resizeMode={ResizeMode.CONTAIN}
              />
              <Text className="text-xl text-white text-start font-nunito-bold">
                Welcome, {registrationData.firstName || "Lennox"}
              </Text>
              <Text className="text-xl text-white text-start font-nunito-bold">
                Personalize your Jolly experience by selecting your top interest
                and favorite topics.
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PersonalizationScreen;

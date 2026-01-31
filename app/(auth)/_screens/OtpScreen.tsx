import { icons } from "@/constants";
import { LoginSchema } from "@/schema/auth-schema";
import {
  useRegistrationData,
  useRegistrationStore,
} from "@/store/registrationStore";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const OtpScreen = () => {
  const registrationData = useRegistrationData();

  const { prevStep } = useRegistrationStore();

  const handlePrevious = () => {
    prevStep();
  };

  return (
    <View className="pb-14 w-full h-full">
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
      <Video
        source={require("@/assets/videos/onboarding2.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      <TouchableOpacity
        className="flex z-50 flex-row gap-2 items-center p-5 mx-5 my-10 rounded-full"
        onPress={handlePrevious}
      >
        <Image
          source={icons.arrowLeft}
          className="size-4"
          tintColor="#FFFFFF"
        />
        <Text className="text-white">Back</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 0 : 40}
        className="z-50 flex-1"
      >
        <View className="flex-1 justify-end items-center px-8">
          <View className="flex flex-col gap-1 items-start px-3 my-2 w-full">
            <Image
              source={icons.jollyicon2}
              className="-mb-10 size-40"
              resizeMode={ResizeMode.CONTAIN}
            />
            <Text className="text-base text-white text-start font-nunito-bold">
              Enter the 6 digit code sent to your phone number{" "}
              {registrationData.phoneNumber || "08023400000"}
            </Text>
          </View>

          <Formik
            initialValues={{ password: "" }}
            validationSchema={LoginSchema}
            onSubmit={() => router.push("/(auth)/login")}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              handleBlur,
            }) => (
              <View className="flex flex-col gap-5 py-5 w-full">
                <View className="flex flex-row gap-1 items-center px-5 py-2 w-full text-base bg-white rounded-full border-2 border-primary-300">
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder="Enter code"
                    className="text-sm font-nunito-semi-bold text-secondary-200"
                  />
                  {errors.password && touched.password && (
                    <Text className="px-5 mt-1 text-xs text-red-500">
                      {errors.password}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  className="flex justify-center items-center py-4 w-full rounded-full bg-secondary-400 font-nunito-bold"
                >
                  {isSubmitting ? (
                    <ActivityIndicator className="text-white size-3" />
                  ) : (
                    <Text className="text-white font-nunito-bold">
                      Continue
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreen;

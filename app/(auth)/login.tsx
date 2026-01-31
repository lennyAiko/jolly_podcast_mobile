import { LoginSchema } from "@/schema/auth-schema";
import { useRegistrationStore } from "@/store/registrationStore";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const { data, updateData, nextStep, prevStep, resetStep } =
    useRegistrationStore();

  useEffect(() => {
    resetStep();
  }, []);

  const handleLoginSubmit = (
    values: { password: string },
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    console.log("Form values:", values);

    setTimeout(() => {
      Alert.alert("Success", `Logged in the user ${values.password}`);
      setSubmitting(false);
      resetForm();
    }, 1000);
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
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 0 : 40}
        className="z-50 flex-1"
      >
        <View className="flex-1 justify-end items-center px-8">
          <View className="flex flex-col gap-1 items-start px-5 my-2 w-full">
            <Text className="text-xl text-white font-nunito-extra-bold">
              WELCOME BACK
            </Text>
            <Text className="text-white font-nunito">
              Enter your password to continue
            </Text>
          </View>

          <Formik
            initialValues={{ password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
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
                <View className="flex flex-col gap-1 items-start">
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder="Enter your password"
                    className="px-5 py-4 w-full text-sm bg-white rounded-full border-2 font-nunito-semi-bold text-secondary-200 border-primary-300"
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

          <TouchableOpacity className="flex flex-col justify-center items-center mt-5">
            <Text className="text-sm text-white font-nunito-extra-bold">
              Recover your password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-col justify-center items-center mt-5"
            onPress={() => router.push("/(auth)/register")}
          >
            <Text className="text-sm text-white font-nunito-extra-bold">
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

import { LoginSchema } from "@/schema/auth-schema";
import { ResizeMode, Video } from "expo-av";
import { Formik } from "formik";
import React from "react";
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Login = () => {
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
    <View className="flex flex-col justify-end items-center pb-10 w-full h-full">
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
      <Text>WELCOME BACK</Text>
      <Text>Enter your password to continue</Text>

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
          <View className="px-10 py-5 w-full">
            <View>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Enter your password"
                className="px-5 py-4 w-full text-base bg-white rounded-full border-2 font-nunito-semi-bold text-secondary-200 border-primary-300"
              />
              {errors.password && touched.password && (
                <Text className="text-xs text-red-500">{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={handleLoginSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator className="size-3" />
              ) : (
                <Text className="my-4 text-center">Continue</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <Text>Recover your password</Text>
    </View>
  );
};

export default Login;

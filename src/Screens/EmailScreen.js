import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, Input, ScrollView } from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import * as MailComposer from 'expo-mail-composer';

function EmailScreen() {
  const navigation = useNavigation();
  const [customerEmail, setCustomerEmail] = useState('fgearhcmc@gmail.com');
  const [emailContent, setEmailContent] = useState('');

  // Function to send the email
  const sendEmail = () => {
    if (customerEmail && emailContent) {
      const toEmail = 'shoppingappmma@gmail.com';
      const subject = 'Regarding My Order';
      const body = `Customer Email: ${customerEmail}\n\n${emailContent}`;

      MailComposer.composeAsync({
        recipients: [toEmail],
        subject: subject,
        body: body,
      })
      .then(result => {
        if (result.status === 'sent') {
          // Email sent successfully
          console.log('Email sent');
        } else {
          console.log('Email not sent:', result);
        }
      })
      .catch(error => {
        console.log('Error sending email:', error);
      });

      // Clear the input fields after sending the email
      // setCustomerEmail('');
      setEmailContent('');
    } else {
      // Notify the user if either of the input fields is empty
      alert('Please enter both customer email and content before sending the email.');
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <Center flex={1} px="4">
        {/* Email Content */}
        <FormControl mt={8}>
          <FormControl.Label fontSize="lg" fontWeight="bold" mb={2}>
            Content
          </FormControl.Label>
          <Input
            multiline
            numberOfLines={8}
            bg="white"
            borderRadius="md"
            placeholder="Enter email content..."
            value={emailContent}
            onChangeText={setEmailContent}
            _focus={{ borderColor: 'primary.500' }}
            textAlignVertical="top" // Set the text alignment to start from the top
          />
        </FormControl>

        {/* Send Button */}
        <Button onPress={sendEmail} mt={6} bg="primary.500" _pressed={{ opacity: 0.8 }}>
          Send Email
        </Button>
      </Center>
    </ScrollView>
  );
}

export default EmailScreen;

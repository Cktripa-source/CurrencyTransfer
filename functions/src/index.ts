import * as z from "zod";
import {generate} from "@genkit-ai/ai";
import {configureGenkit} from "@genkit-ai/core";
import {firebase} from "@genkit-ai/firebase";
import {firebaseAuth} from "@genkit-ai/firebase/auth";
import {onFlow} from "@genkit-ai/firebase/functions";

configureGenkit({
  plugins: [
    firebase(),
  ],
  logLevel: "debug",
  enableTracingAndMetrics: true,
});

export const menuSuggestionFlow = onFlow(
  {
    name: "menuSuggestionFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
    authPolicy: firebaseAuth(() => {
      // Custom auth policy
    }),
  },
  async (subject) => {
    const prompt = `Suggest an item for the menu of a ${subject} themed 
                    restaurant`;
    const llmResponse = await generate({
      model: "", // Set model
      prompt,
      config: {
        temperature: 1,
      },
    });
    return llmResponse.text();
  }
);

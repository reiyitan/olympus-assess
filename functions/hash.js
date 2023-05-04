import * as Crypto from "expo-crypto";

/**
 * Hashes a string using the SHA256 algorithm.
 * 
 * @param text - The text to be hashed.
 * @returns The hashed text.
 */
export async function hash(text) {
    const hashed = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        text
    );
    return hashed;
}
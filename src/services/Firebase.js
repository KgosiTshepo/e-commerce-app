import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/* Sets OAuth parameter to pass in a Google OAuth request for popup and redirect sign in operations.
 * The authorization server prompts the user to select a user account.
 * Allows a user who has multiple accounts at the authorization server to select amongst the multiple accounts.
 */
provider.setCustomParameters({ prompt: "select_account" });

export const firestore = firebase.firestore();
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuthObj, otherProps) => {
	// auth object does not exist
	if (!userAuthObj) return;
	const userRef = firestore.doc(`users/${userAuthObj.uid}`);
	const userSnapShot = await userRef.get();

	if (!userSnapShot.exists) {
		const { displayName, email } = userAuthObj;
		const createdAt = new Date();
		// create userAuth object
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherProps,
			});
		} catch (error) {
			console.log("Error creating user", error);
		}
	}
	return userRef;
};

export default config;

import { required } from "@rxweb/reactive-form-validators";

export class User {

  @required({message:"firstNameFurigana is required !!! "})
  firstNameFurigana?: string;

  @required({message:"firstNameKanji is required"})
  firstNameKanji?: string;

  @required({message:"lastNameFurigana is required"})
  lastNameFurigana?: string;

  @required({message:"lastNameKanji is required"})
  lastNameKanji?: string;

  @required({message:"profileImage is required"})
  profileImage?: string;
}

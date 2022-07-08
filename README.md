# react-flexi-password-checklist :white_check_mark:
A flexible React component that validates user passwords against the custom password requirement checklist, in real-time.

It is so flexible that the only thing **required** for you to pass to the component is the password value itself, which is obvious for a password validator.  
It gives you the ability to customize the rest of the things, which includes the password requirements to check, custom password requirement statements, title, and so on, as per your need.

So let's dive right in and see what this component has to offer.  
<br>

## Installing the package  
`npm install react-flexi-password-checklist`  

#### Usage
```javascript
import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';
```   
> Please note that it is a named export.
<br>

### :lock: Privacy
<br>

**react-flexi-password-checklist** is carefully designed by keeping the end users at the center and to protect their privacy. It solely focuses on the end-user experience and aims at enhancing the same in the future.  
The username and password data are only used to carry out the validations and are not sent to any servers of any kind or shared with anyone; nor does it encourage or support misuse of user data.
<br>
<br>

## Table of Contents

- [:ballot_box_with_check: Password Condition Checks](#ballot_box_with_check-password-condition-checks)
    - [minLength](#minlength)
    - [lengthMatch](#lengthmatch)
    - [includesUsername](#includesusername)
    - [matchPasswords](#matchpasswords)
    - [specialChar](#specialchar)
    - [upperCaseAndNumeric](#uppercaseandnumeric)
- [:u6307: Custom Condition Texts](#u6307-custom-condition-texts)
- [:a: Checklist Title](#a-checklist-title)
- [:page_with_curl: Description Text](#page_with_curl-description-text)
- [:art: Custom Styles](#art-custom-styles)
    - [:abc: Custom Font](#abc-custom-font)
    - [:heavy_plus_sign: Custom Font Size](#heavy_plus_sign-custom-font-size)
    - [:rainbow: Custom Font Color](#rainbow-custom-font-color)
<br>  

First and foremost, you can choose what conditions/password requirements you want the password to be validated against.
You can customize the requirement checks based on your preference, by passing a _configuration object_ (`config = { ...}`) as a prop to the component.  

You can pass the below _password validation conditions_ to the `config` object : 

| Property name | Description | Type | Required | Allowed values | Default value |  
| :---: | --- | :---: | :---: | :---: | :---: |
| *minLength* | Minimum character length that the password value should comprise of | `integer` | No | - | 8 | 
| *lengthMatch* | Validates if the password value is equal to or more than the set `minLength` or default value | `boolean` | No | true/false | true |
| *includesUsername* | Checks whether password contains username value or not | `boolean` | No | true/false | false |
| *matchPasswords* | Checks whether the password and confirm password values match or not | `boolean` | No | true/false | false |
| *specialChar* | Checks whether the password contains allowed special characters or not | `boolean` | No | true/false | true |
| *upperCaseAndNumeric* | Checks if the password has at least one uppercase or numerical value | `boolean/object` | No | true/false | true |  
<br>


> Below conditions are enabled, by default, even if you don't pass the `config` object : 
> - `lengthMatch` (_minimum length set to 8_)
> - `specialChar`
> - `upperCaseAndNumeric` (_separate checks_)
<br>  

Certain password validation conditions require you to pass the below values as props along with the `config` object and _password_ value : 
- **username**  
The **username** prop should consist of the form's _username_ value. It is a **required** value in case of `includesUsername` condition check.

- **confirmPassword**  
The **confirmPassword** prop should consist of the form's _confirmPassword_ field value. It is a **required** value in case of `matchPasswords` condition check.  

> Please be aware not to use prop names other than **username**, **password**, **confirmPassword** and **config**.  
<br>

Let's say you want to enable the `matchPasswords` condition, where we check if the passwords in the _password_ and _confirm password_ field match.  
We can get that to work as below : 

#### For class components 
```javascript
import React, { Component } from 'react';
import "./css/styles.css";
import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';

class EnquiryForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = { username : "",
                       password : "",
                       confirmPassword : "" };          
    }
    
    </*Rest of the code*/>
    
<FlexiPasswordChecklist password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={{ matchPasswords : true }} 
/>     
               
}   
```

#### For function components 
```javascript
import React, { Component } from 'react';
import "./css/styles.css";
import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';

function EnquiryForm(props) {

const [ username, setUsername ] = useState("");
const [ password, setPassword ] = useState("");
const [ confirmPassword, setConfirmPassword ] = useState("");
    
    </*Rest of the code*/>
    
<FlexiPasswordChecklist password={password} 
                        confirmPassword={confirmPassword} 
                        config={{ matchPasswords : true }} 
/>     
               
}   
```  
<br>  

As you can see above, we have passed **confirmPassword** as a prop along with **password**, after setting `matchPasswords` to `true`.  
This is done as `matchPasswords` condition check relies on **confirmPassword** value for its validation.  
<br>  

Similar is the case with `includesUsername` condition.  
We need to make sure that we pass **username** as a prop when `includesUsername` is set to `true`.

##  
<br>


### :ballot_box_with_check: Password Condition Checks
<br>

You can use the below condition checks as a part of your custom password checklist :
<br>

- [minLength](#minlength)
- [lengthMatch](#lengthmatch)
- [includesUsername](#includesusername)
- [matchPasswords](#matchpasswords)
- [specialChar](#specialchar)
- [upperCaseAndNumeric](#uppercaseandnumeric)
<br>

#### minLength

The `minLength` property takes an **integer** value which represents the minimum number of characters you want the user to enter for the check to get resolved.

#### Usage

```javascript
{ minLength : 12 }   
``` 
#### Type 
```css
integer
```  
> _By default, the `minLength` property value is set to 8._  
<br>

```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ {minLength : 15} }
/>
```   
In the above example, the `lengthMatch` condition would be enabled by default, with the minimum password character length set to 15.
<br>  
<br>

#### lengthMatch

The **lengthMatch** password requirement checks if the password entered by the user matches the default or the desired character length set by you.  

#### Usage
```javascript
{ lengthMatch : true/false }   
``` 
#### Type 
```css
boolean
```  
> _By default, it is set to true._  
<br>

You can skip adding it to the `config` object as it is enabled by default.  
If you prefer using a custom minimum character length instead of the default value, for the **lengthMatch** check, you can simply add `minLength` property to the `config` object with its value set to the desired length.
<br>  
<br>

#### includesUsername  
 
The **includesUsername** password condition checks whether the entered password contains username or not. The condition check would not resolve to :white_check_mark: if the username, as a whole, is included in the entered password.  
#### Usage
```javascript
{ includesUsername : true/false }   
``` 
#### Type 
```css
boolean
```  
> _By default, it is set to false._
<br>

```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        config={ {includesUsername : true} }
/>
```  
 
If you plan to use this requirement/condition check, please make sure to pass **username** prop for the check to work as expected.
<br>  
<br>

#### matchPasswords  

The **matchPasswords** condition checks whether the passwords entered by the user in the _password_ and _confirm password_ field match or not.  
#### Usage
```javascript
{ matchPasswords : true/false }   
``` 
#### Type 
```css
boolean
```  
> _By default, it is set to false._
<br>

```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={ {matchPasswords : true} }
/>
```  

In order to use this condition check, please make sure to pass **confirmPassword** prop for the validation to work as expected.
<br>  
<br>

#### specialChar  
 
The **specialChar** requirement checks whether the user entered password contains special characters or not.  
#### Usage
```javascript
{ specialChar : true/false }   
``` 
#### Type 
```css
boolean
```  
> _By default, it is set to true._  

The condition would check for the following special characters in the password value - `!@#*_|.?`  
<br>

You could see that the **specialChar** condition's default text has a keyword - **allowed**, with blue font color.
<br>

<img width="667" alt="image" src="https://user-images.githubusercontent.com/106964001/175802891-a413f2b5-5867-4a80-b306-9602feb5282d.png">
<br>

A simple mouse hover or a tap action on the **allowed** keyword would reveal the allowed special characters that the condition would check for, in the password value.
<br>

<img width="712" alt="image" src="https://user-images.githubusercontent.com/106964001/175802953-5fe19767-5559-4d48-88d6-afdff245eca8.png">
<br>
<br>

#### upperCaseAndNumeric  
 
The **upperCaseAndNumeric** requirement checks if the entered password includes at least one number or an uppercase letter, or both.  

#### Usage
```javascript
{ upperCaseAndNumeric : true/false }   
``` 
#### Type 
```css
boolean
```  
> _By default, it is set to true._
<br>

When you set `upperCaseAndNumeric` value to either `true` or `false`, both the condition checks i.e. **upperCase** as well as **numeric** would be enabled/disabled.  
To have more control, you can assign `upperCaseAndNumeric` property to an object rather than a plain boolean value.  
The object would allow further splitting of the conditions into either just **upperCase** condition check or a **numeric** one.
#### Usage
```javascript
{ upperCaseAndNumeric : { upperCase : true/false, numeric : true/false } }   
``` 
#### Type 
```css
object
```
<br>

Let's say you don't want the **upperCase** condition as a part of your password requirement.  
```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={ {
                            matchPasswords : true,
                            includesUsername : true,
                            upperCaseAndNumeric : { numeric : true }
                        } }
/>
```
As demonstrated above, we have set `upperCaseAndNumeric` value to `{ numeric : true }`, therefore, eliminating the **upperCase** check from the group.  
<img width="612" alt="image" src="https://user-images.githubusercontent.com/106964001/175803069-1b5f5034-c06f-43a4-b3d0-bd0f619cb4ca.png">

> Setting `upperCaseAndNumeric` value to an empty object will remove both the checks. It is recommended to rather set the value to `false` if you don't plan to add **upperCase** and **numeric** checks.  

Thus, the object assignment would allow you to be more specific with the condition enable/disable part rather than treating both the checks as a single unit.  
##  
<br>


### :u6307: Custom Condition Texts
<br>

You can frame the password requirement texts in your own verbiage instead of the default ones.  
Enable it by passing the `conditionTexts` property to the `config` object.  

#### Usage

```javascript
{ conditionTexts :  {
                       lengthMatchText : "<custom condition text>",
                       includesUsernameText : "<custom condition text>",
                       matchPasswordsText : "<custom condition text>",
                       specialCharText : "<custom condition text>",
                       upperCaseAndNumericText : { upperCaseText : "<custom condition text>" , 
                                                   numericText : "<custom condition text>"
                                                 }
                    } 
}   
```  
#### Type 

```css
object
```
> _It is not enabled by default._  
> It is not mandatory to include each and every condition text in the `conditionTexts` object.
<br>

For example, let's say you don't wish to customize condition texts for **matchPasswords** and **specialChar**.  
In this case, you can simply eliminate it from the `conditionTexts` object, like below : 
```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                         config={ {
                            minLength : 10,
                            conditionTexts : {
                                lengthMatchText : "Minimum length should be 10",
                                includesUsernameText : "Avoid using username in your password",
                                upperCaseAndNumericText : { upperCaseText : "Please use at least one uppercase character", 
                                                            numericText : "Please include at least one number" 
                                                          }
                            },
                            matchPasswords : true,
                            includesUsername : true
                         } }
/>
```
<br>

This would set the default condition texts for **matchPasswords** and **specialChar**, while texts for the rest of the conditions would be the ones that are included in the `conditionTexts` object.
<br>
<img width="622" alt="image" src="https://user-images.githubusercontent.com/106964001/175803178-4f8380cc-b4c8-4533-ba43-f145f93e486e.png">
<br>
If you wish to frame all of them as per your text content, you can include them all in the `conditionTexts` object.   

```javascript  
<FlexiPasswordChecklist  username={this.state.username} 
                         password={this.state.password} 
                         confirmPassword={this.state.confirmPassword} 
                         config={ {
                            minLength : 10,
                            conditionTexts :  {
                                lengthMatchText : "Minimum length should be 10",
                                includesUsernameText : "Avoid using username in your password",
                                matchPasswordsText : "Both password fields must match",
                                specialCharText : "Please use at least one of the following special characters - !@#*_|.?",
                                upperCaseAndNumericText : { upperCaseText : "Please use at least one uppercase character", 
                                                            numericText : "Please include at least one number"
                                                          }
                             },
                            matchPasswords : true,
                            includesUsername : true
                         } }
/>
```
<img width="645" alt="image" src="https://user-images.githubusercontent.com/106964001/175275230-806a3c8e-fc4f-4bda-8674-c7a55b9290c4.png">  

> Please note that if you have the `lengthMatch` condition enabled and plan to set a custom condition text for the same, kindly make sure to mention the **minimum character length value** in the `lengthMatchText` text content.  
> It should be in sync with the `minLength` property value passed by you in the `config` object.
>
> For example, if the passed `minLength` property value is 10, please mention that the **minimum character length value** is 10 in the `lengthMatchText` text content.  
```javascript
 config={ { minLength : 10,
            conditionTexts : { lengthMatchText : "Please make sure your password has at least 10 characters." } 
        } }
```  
<img width="529" alt="image" src="https://user-images.githubusercontent.com/106964001/176605360-bb75c53f-4923-40eb-a2fb-c46013b3008b.png">
<br>

>
> In case you have not added `minLength` to the `config` object, please mention the **minimum character length value** as 8 in the `lengthMatchText` text content.  
```javascript
 config={ { conditionTexts : { lengthMatchText : "Please make sure your password has at least 8 characters." } } }
```  
<img width="536" alt="image" src="https://user-images.githubusercontent.com/106964001/176605145-8d20f70f-63a6-418f-9d5a-2c9d818f041d.png">
<br>

> Doing so would help to avoid confusion for the end user.  
> The **minimum character length value** in the `lengthMatch` condition's default text stays in sync with the passed `minLength` property value.  
<br>

So that's how you can have your own custom condition texts.  

##  
<br>


### :a: Checklist Title
<br>

You can set your own checklist title, keep the default one, or have no title at all.  

#### Usage

```javascript
{ title : true/false }   
```  
#### Type 

```css
boolean
```  
> _By default, it is set to false._
<br>  

Let's understand it better through examples.  

All we need to do is set the `title` property to `true`, in our good old `config` object.  
Doing so will set the title text in the checklist window to the default value - **Password checklist**.  

```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={ { title : true,
                                   matchPasswords : true,
                                   includesUsername : true
                        } }
/>
```  
<img width="713" alt="image" src="https://user-images.githubusercontent.com/106964001/175803250-e512fdaa-3048-429c-b70c-f877582bf116.png">

To set a custom title, you need to assign an object to the `title` property.
#### Usage
  
```javascript                                        
{ title : { text : "<custom checklist title>" } }
```
#### Type 

```css
object 
```  
<br>  

Let's have a closer look at it.

```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={ { title : { text : "Password Validator" /* custom text for the title property */ },
                                   matchPasswords : true,
                                   includesUsername : true
                        } } 
/>
```

The `title` object must have a property named - `text`.  
The `text` property only accepts a string value, which holds your custom checklist title.
> If you pass a value other than a string or even an empty string, to the `text` property, the default title text would be displayed.
<br>

```javascript
{ text : "Password Validator" }
```  
<img width="691" alt="image" src="https://user-images.githubusercontent.com/106964001/175803299-6a1a0b8d-fa90-4e72-a4ca-b52889838fa8.png">

> Please note that it expects the object with `text` as the property name. If you use a different property name, the title text displayed would be the default one - **Password checklist**.  

The below code will not set the title text to **My Password Validator**.  
```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ { title : { customText : "My Password Validator" } } } 
/>
```
##  
<br>


### :page_with_curl: Description Text
<br>

Description Text allows you to add extra textual content. It could be a place for you to explain the password requirement instructions in more detail or maybe a brief information about how you are securely handling user passwords.  

#### Usage

```javascript
{ description : true/false }   
```  
#### Type 

```css
boolean
```
> _By default, it is set to false._
<br>  

To set a custom description text, you need to assign an object to the `description` property.  
#### Usage
 
```javascript                                        
{ description : { text : "<custom description text>" } }
```
#### Type 

```css
object
```

```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        confirmPassword={this.state.confirmPassword} 
                        config={ {
                            matchPasswords : true,
                            includesUsername : true,
                            title : true,
                            description : { text : "Please make sure that your password meets all the requirements listed below..." }
                        } }
/>
```   
<img width="608" alt="image" src="https://user-images.githubusercontent.com/106964001/175804082-0ae33661-3c33-4755-97c8-49f9998b4b48.png">
 
The assigned object should have a property name as `text`.  
The `text` property only accepts a string value, which holds your description text.  
> If you pass a value other than a string or even an empty string, to the `text` property, the default description text would be displayed.
```javascript
{ text : "Please make sure that your password meets all the requirements listed below..." }
```
<br>

> Please note that it expects the object with `text` as the property name. If you use a different property name, the description text displayed would be the default one - _To keep your valuable information safe, we require that you use a strong password that meets the minimum requirements listed below_.  
<img width="598" alt="image" src="https://user-images.githubusercontent.com/106964001/175804136-eba07b9d-1c06-4580-af94-1907f9e5bd03.png">

##  
<br>


### :art: Custom Styles
<br>

Custom Styles enable all-new personalization features for description text, checklist title and password conditions, making the customization experience even more seamless.  
It provides you the flexibility to individually target textual content and customize its font face, size, and color, making it easy for the components to adapt to the custom styles of your choice, as font faces/styles are generally subjective. 

#### Usage

```javascript
{
  styles = {
         title : { fontFace : "<custom font name>", fontSize : <custom font size>, fontColor : "<custom font color>" },
         description : { fontFace : "<custom font name>", fontSize : <custom font size>, fontColor : "<custom font color>" }, 
         conditions : { fontFace : "<custom font name>", fontSize : <custom font size>, fontColor : "<custom font color>" }
  }
}    
``` 
#### Type 

```css
object
```
> _It is not enabled by default._  
<br>

You can see that the `styles` property follows a simple nested object design.
<br>

It consists of three properties -  _title_, _description_ and _conditions_.  
As the property names indicate,  _title_ will hold styling data for the checklist title,  _description_ would consist of styles for description text and finally, _conditions_ will enable customization capabilities for the condition texts.  

> All the three properties - _title_, _description_ and _conditions_ accept styling properties in the form of an object.  
<br>

To enable **Custom Styles**, you just need to add the `styles` property to the `config` object. The `styles` property itself is an object that holds all the **style elements** and **style components**.
<br>
<br>

#### What are _style elements_ and _style components_?
<br>

In this case, **style elements** are the various styling properties that you would use here, such as _fontFace_, _fontSize_ and _fontColor_.  
Whereas **style components** are the components we discussed above, upon which the **style element** properties will be applied - _title_, _description_ and _conditions_.
<br>

We will be hearing the terms - **style elements** and **style components** a lot, later down the lane.  
> It is not mandatory to include each and every **style element** (_fontFace, fontSize, fontColor_) or **style component** (_title, description, conditions_) in the `styles` object.
<br>

Before we get to all the amazing examples, let's go through some important aspects about **Custom Styles**.  
> If you don't pass the `styles` property to the `config` object, the default styling properties will be applied for the **style components**.  
>
> The order of the **style elements** or **style components** doesn't matter.  
>
> If you have passed the `styles` property to the `config` object with custom **fontFace** and **fontSize**, let's say, for just the _title_ and _description_ component, the respective changes would be applied for _title_ and _description_ only, while styling for the rest of the **style components** would be the default one.
<br>

Let's explore the **style elements** in more detail.  
As mentioned above, you can customize below **style elements** :  
- **Font Face**
- **Font Size**
- **Font Color**
<br>
<br>

### :abc: Custom Font
<br>

You have the freedom to choose your own font, instead of the default one, for the checklist title, description text and password condition texts.  
We are talking about two types of fonts here - 
- **Pre-installed/system fonts**
- **Fonts imported in the .css file using the `@font-face` rule**  

#### Usage

```javascript
{ styles = { <title/description/conditions> : { fontFace : "<custom font name>" } } }  
``` 
#### Type 

```css
object
```
> Please be aware that the `fontColor` **style element** expects a string value.
<br>

Let's see it in action.

We need to set `fontFace` property to the desired font name, enclosed in single/double quotations, and add it in the **style component** object of your choice.  
```javascript
{ conditions : { fontFace : "Courier New" } }
```  
Add the **style component** object in the `styles` object, which ultimately resides in the `config` object.  
```javascript
{ config : { styles : { conditions : { fontFace : "Courier New" } } } }
```  
#### Desired custom font 
<img width="730" alt="image" src="https://user-images.githubusercontent.com/106964001/175803562-5f2aa53a-8c90-4c56-a4a0-27be0fce426b.png">

#### Default font 
<img width="537" alt="image" src="https://user-images.githubusercontent.com/106964001/175803530-f3cb8d3b-39a3-4c5c-a506-76ca630937e4.png">  

As mentioned above, we could handle two ways of font assignments here.  
Let's explore them in more detail.  

- #### Pre-installed/system fonts  

These fonts are the ones that are pre-installed in your system. In short, the ones that are available by default - Segoe UI, Calibri (_on Windows_) and Helvetica, Optima (_on macOS_) - to name a few.  
Such font names can be passed to the `fontFace` property without any additional steps.  

In the below example, we have passed **Helvetica Neue Light**, a pre-installed font on macOS, as a value to the `fontFace` property, for _title_ and _conditions_ **style component**.
```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ {
                            title : true,
                            description : true,
                            includesUsername : true,
                            styles : { title : {fontFace : "Helvetica Neue Light"},
                                       conditions : {fontFace : "Helvetica Neue Light"} }
                        } }
/>
```  
<img width="610" alt="image" src="https://user-images.githubusercontent.com/106964001/176603539-7379f68a-5157-4116-8740-342a707f04bf.png">

Upon closer look, you could see that the description text font remains unchanged. The description text font, in this case, displays the default font, as it was excluded from the `styles` object.

> Please note that a font that is pre-installed for you might not be present for other systems or users that might use your application or form. This might lead to an inconsistent typography experience on different systems.

We will handle this scenario by importing font files the conventional way.
<br>
<br>

- #### Fonts imported in the .css file using the `@font-face` rule   

Now, these fonts are the ones that may not be pre-installed in the system and consist of undertaking additional steps to get them to work.
All you need to do is import them manually in the css stylesheet using the `@font-face` rule, like we do for importing any desired font files in general, to make sure the typography experience is consistent across all the devices.
<br>

Let's proceed with it step-by-step.  

#### Step 1. Import font files using the `@font-face` rule in the stylesheet  

```css
/* Fontfaces */

@font-face { 
    font-family : 'Graphik Black'; 
    src : url('../../public/fontFaces/Graphik-Black.woff') format('woff');
    font-weight : normal;
    font-style : normal;
} 

@font-face { 
    font-family : 'Great Vibes Regular'; 
    src : url('../../public/fontFaces/Great-Vibes-Regular.woff') format('woff');
    font-weight : normal;
    font-style : normal;
};  

</*Rest of the CSS declarations*/>
```  

#### Step 2. Import the stylesheet in your application where you import and render/call the _react-flexi-password-checklist_ package

```javascript
import  React, { Component } from 'react';
import "./css/styles.css";  /*includes @font-face rules*/
import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';
```

#### Step 3. Set the `fontFace` property to the `font-family` value set in the stylesheet  

```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ {
                            title : true,
                            includesUsername : true,
                            styles : { conditions : {fontFace : "Great Vibes Regular"} }
                        } }
/>
```  

Here, we have added _Great-Vibes-Regular.woff_  font file in **styles.css** with `font-family` value assigned to **Great Vibes Regular**, imported the stylesheet in our application, and have set the `fontFace` property to 'Great Vibes Regular' for the _conditions_ **style component**.  

<img width="587" alt="image" src="https://user-images.githubusercontent.com/106964001/175803714-fbc84dbd-27c5-41f0-bddc-e438ba3e43ea.png">

So that is how you can use custom fonts to add a personal touch to the text content.
###
<br>

### :heavy_plus_sign: Custom Font Size
<br>

You can assign your own font size for the title, description as well as the password condition texts.
<br>  

#### Usage

```javascript
{ styles = { <title/description/conditions> : { fontSize : <custom font size> } } }  
``` 
#### Type 

```css
object
```
> Please be aware that the `fontSize` **style element** expects an integer value.
<br>

Let's understand it better with an example.
```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ {
                            title : true,
                            description : true,
                            styles : { description : {fontSize : 12},
                                       title : {fontSize : 50, fontFace : "Graphik Black"} }
                        } }
/>
```  
As simple as that!  
As you can see in the above code, we have set different font sizes for _description_ and the _title_ **style component**.  

<img width="670" alt="image" src="https://user-images.githubusercontent.com/106964001/176608373-d8fd1a92-3591-4070-a07b-594d6d218dbd.png">

Also, as we have excluded _conditions_ **style component** from the `styles` object, they get the default treatment.  
This is how you can set your own font sizes to the **style components** of your choice.

###
<br>

### :rainbow: Custom Font Color
<br>

We all know the vital role good color combinations play in enhancing the overall application experience.  
So set your color theories free and showcase the font colors of your choice.
<br>  

#### Usage

```javascript
{ styles = { <title/description/conditions> : { fontColor : "<custom font color>" } } }  
``` 
#### Type 

```css
object
``` 
> Please be aware that the `fontColor` **style element** expects a string value.
<br>

Let's understand it better with an example.
```javascript
<FlexiPasswordChecklist username={this.state.username}
                        password={this.state.password} 
                        config={ {
                            title : true,
                            includesUsername : true,
                            description : true,
                            styles : { description : {fontColor : "#922B21"},
                                       title : {fontFace : "Graphik Black", fontColor : "#33BBFF"} }
                        } }
/>
```  
<img width="629" alt="image" src="https://user-images.githubusercontent.com/106964001/176609883-fa77efc4-0e22-4097-b570-acd30f915aca.png">  

> Please be aware that the set font color for condition texts would be revealed only when the condition resolves to :white_check_mark:.  

By default, the font color changes to black when a given condition resolves to :white_check_mark:.
<img width="444" alt="image" src="https://user-images.githubusercontent.com/106964001/176610255-13581f02-8531-40be-89a9-facc4953e787.png">  

Similarly, when you set a custom font color for condition texts, the font color would change to the custom color only when any condition is satisfied.  

Let's understand it through some examples.  
```javascript
<FlexiPasswordChecklist password={this.state.password} 
                        config={ {
                            title : true,
                            description : true,
                            styles : { description : {fontSize : 14, fontColor : "#2E80D4", fontFace : "Helvetica Neue Light"},
                                       title : {fontColor : "#F01A4F"},
                                       conditions : {fontColor : "#D4AC0D", fontFace : "Helvetica Neue Light"} }
                        } }
/>
```  
<img width="711" alt="image" src="https://user-images.githubusercontent.com/106964001/176835060-1caddb43-ed9b-4d43-8238-ee8c471641db.png">

We could see above that despite of us setting the font color for _conditions_ to `#D4AC0D`, we still see them display gray.  
<img width="511" alt="image" src="https://user-images.githubusercontent.com/106964001/176610985-de7bc31b-86e7-4f71-b34a-ab4ce248cdb7.png">  

When any of the custom/default conditions are satisfied, the font color changes to the color set by you in the _conditions_ **style component**, belonging to the `styles` object.  
<img width="726" alt="image" src="https://user-images.githubusercontent.com/106964001/176834905-04960bed-b2e7-4c8d-a681-5f9689daec1f.png">
<br>

So this is how you can use custom font colors and make the checklist window seamlessly blend into your application/website.  


##
<br>


### :warning: Introducing Prop Check 
<br>

Prop Check, as the name suggests, would check if you have accidentally missed passing the required props or maybe misspelled it, based on the condition checks you have enabled.  
So basically, it would act as a debugger and prompt you with the missed/misspelled prop, in the checklist window.  

#### Usage

```javascript
{ propCheck : true/false }
``` 
#### Type 

```css
boolean
```  
> _By default, it is set to false._  
> Please make sure to disable **Prop Check** in the production build of your application/website, as it is solely designed to help the developer with the troubleshooting process, and not intended for the end user.  

<img width="712" alt="image" src="https://user-images.githubusercontent.com/106964001/175781823-271e9beb-7b58-4dbb-957f-b9e12ad93e2d.png">
<br>

Let's see how it works with an example.

We have set `matchPasswords` property to `true` in the `config` object.  
```javascript
<FlexiPasswordChecklist  password={this.state.password} 
                         config={ { title : true,
                                    matchPasswords : true, 
                                    propCheck : true } }
/>
```
<br>

As you know by now that by setting `matchPasswords` to `true`, we enable the main password and confirm password validation.  
So, as you can see in the above code, we have missed to pass **confirmPassword** as a prop. As a result, we receive below prompt :  
<img width="584" alt="image" src="https://user-images.githubusercontent.com/106964001/175804224-75f46076-8942-4d8e-8ba6-5dee4739293d.png">

Same is the case with `includesUsername` check where you would be prompted with missing **username** prop, if you miss to pass it or misspell it accidentally.  
<img width="545" alt="image" src="https://user-images.githubusercontent.com/106964001/175804261-cf08fa9a-d991-4cca-8d14-ae06359cf8df.png">

Since the validation is dependent on those input values, we need to make sure that **confirmPassword** and **username** are passed as props if we plan to use `matchPasswords` and `includesUsername` condition checks.
<br>  

So, to summarize, **Prop Check** helps you easily identify if you have missed passing the required props. Thus, saving you a considerable amount of time, needed otherwise, to manually scan the code, which could be tedious sometimes.  


##  
<br>

### :white_square_button::sparkles: Introducing Dark Mode  
<br>

There could be instances when you choose to have a dark background for your form or website.  
Well, that’s what **Dark Mode** is for.  
By setting a simple `config` property `darkMode` to `true`, you enable your checklist window to transform into **Dark Mode**.
<br>

The background color of the checklist window blends into the dark background color of your choice, set by you in the form or website.  
The font color for the condition texts, when not validated, will be _gray_, like they are in default mode. It would switch to _white_ once any enabled condition is satisfied.  
> When you pass a custom font color for the _conditions_ **style component**, in the `styles` object, the font color for the condition texts would change to the custom font color only when any enabled condition is satisfied.  

#### Usage

```javascript
{ darkMode : true/false }
``` 
#### Type 

```css
boolean
```  
> _By default, it is set to false._  
> Please note that the background color in **Dark Mode** would be the one you have set for your form or website.
<br>

Let's see **Dark Mode** in action.  

You need to set `darkMode` property to `true`, in the `config` object, for **Dark Mode** to work.
<br>

Suppose we have a `.form-container` class that wraps the form input tags, button and **react-flexi-password-checklist** module.  
In the below example, the `background-color` for our supposed `.form-container` class is set to `#353535`.  
<br>
<img width="1646" alt="image" src="https://user-images.githubusercontent.com/106964001/175804480-19d1f523-8df1-4c4e-bdb7-de9f10753674.png">


In the below example, the `background-color` for `.form-container` class is set to `black`.  
<br>
<img width="1656" alt="image" src="https://user-images.githubusercontent.com/106964001/175804694-75c14e3a-16fb-443b-b886-c3d669310a6a.png"> 


<br>  

#### There is one more thing to it... :fireworks:

You can add a subtle glow to the condition texts, title, description text, and the validation indicator.  
All you need to do is pass an object.

#### Usage

```javascript
{ darkMode : { withGlow : true/false } }
``` 
#### Type 

```css
object
```  

To enable text glow, assign an object with the property name as `withGlow` and set it to `true`.  
<br>
<img width="713" alt="image" src="https://user-images.githubusercontent.com/106964001/175804752-133dfccd-2c72-426b-9a0a-24c76ade4019.png">
<br>
<br>

The text glow color is dynamic and adapts to the set custom color for any of the **style components** in the `styles` property.
```javascript
<FlexiPasswordChecklist  password={this.state.password} 
                         config={ { title : true,
                                    description : true, 
                                    darkMode : { withGlow : true }, 
                                    styles : { 
                                                title : { fontFace : "SF Pro Display", fontColor : "#AA356A" },
                                                description : { fontFace : "Helvetica Neue Light", fontSize : 14, fontColor : "#5E1232" },
                                                conditions : { fontFace : "Helvetica Neue Light" } 
                                    } } }
/>
```
<br>

As you can see above, we have set `#AA356A` color for the _title_ and `#5E1232` for the _description_ **style component**.  
So along with the actual font color, the text glow color would also change from the default color to `#AA356A` for _title_ and to `#5E1232` for the _description_ **style component**.
<br>

<img width="1492" alt="image" src="https://user-images.githubusercontent.com/106964001/177009553-950e333c-d26f-4f8f-9aae-d0ad87ecc4c1.png">

As we have not passed any custom font color to the _conditions_ **style component**, the text glow color for _conditions_ is set to the default one.
<br>
<br>

**Dark Mode** shines when combined with **Custom Styles**.
<br>  

<img width="695" alt="image" src="https://user-images.githubusercontent.com/106964001/176657661-73c2f5e6-aa1e-4fab-8701-dbd186b2d41a.png">
<br>

And the text glow takes it to a whole new level.
<br>  

<img width="1313" alt="image" src="https://user-images.githubusercontent.com/106964001/176659317-bc0dc009-9fee-46c8-b633-d68609217848.png">
<br>

So that is how you can use **Dark Mode** and its stunning text glow feature.  

##  
<br>   

You have finally reached the end of the document. :confetti_ball::tada:  
Appreciate the patience. :pray: 

For one last time, let's see **react-flexi-password-checklist** in all its glory...

```javascript
<FlexiPasswordChecklist username={this.state.username} 
                        password={this.state.password} 
                        config={ {
                            minLength : 10,
                            includesUsername : true,
                            matchPasswords : true,
                            upperCaseAndNumeric : { upperCase : true },
                            description : true,
                            propCheck : true,
                            darkMode : { withGlow : true },
                            title : { text : "Password requirement checklist" },
                            styles : { 
                                title : { fontFace : "SF Pro Display", fontColor : "#27AE60" },
                                description : { fontFace : "Helvetica Neue Light", fontSize : 14, fontColor : "#85C1E9" },
                                conditions : { fontColor : "#F7DC6F" } 
                            },
                            conditionTexts :  {
                                lengthMatchText : "Please make sure password has minimum 10 characters",
                                includesUsernameText : "Make sure your password does not contain your username",
                                matchPasswordsText : "Password and Confirm Password must match",
                                specialCharText : "Please include at least one of the following special characters - !@#*_|.?",
                                upperCaseAndNumericText : { 
                                                            upperCaseText : "Please make sure to add at least one uppercase letter" , 
                                                            numericText : "Please make sure to include at least one numeric value in your password"
                                                          }
                             } 
                        } }
/>
```
<br>

<img width="1175" alt="image" src="https://user-images.githubusercontent.com/106964001/176665876-a6d276a4-1936-4743-b5a2-77e3ea845ceb.png">
<br>

### Screenshots  

#### Combined layouts
_**Screen dimensions :** 1900px x 1145px_  
<img width="1238" alt="image" src="https://user-images.githubusercontent.com/106964001/175812603-260c1b3e-dfd1-4287-b19e-aa145d3e91d3.png">

#### Side-by-side layout
_**Screen dimensions :** 1900px x 1145px_  
<img width="1150" alt="image" src="https://user-images.githubusercontent.com/106964001/175812751-ce4868b4-5f78-4668-83c3-984069a77f50.png">

#### Vertical layout
_**Screen dimensions :** 1900px x 1145px_  
<img width="695" alt="image" src="https://user-images.githubusercontent.com/106964001/175812770-ff2b8b7e-1886-4643-9d22-28e0a301bc3b.png">

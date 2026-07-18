const letter = `Dear Payal ❤️


Sabse pehle,
I hope tumhara paper achha gaya hoga ❤️

Aur I hope tumhare tabiyat ab theek hoge.

Agar tum ye page padh rahi ho,
to sabse pehle thank you.

Pichle kuch dino me maine bahut socha.
Har conversation.
Har argument.
Har misunderstanding.

Aur jitna socha,
utna realize hua ki kai jagah maine situations ko unnecessarily complicated bana diya.

Main ye website kisi argument ko continue karne ke liye nahi bana raha.
Na hi isliye ki tum guilty feel karo.

Bas isliye,
kyunki jo baat shayad messages me properly nahi keh paya,
wo yahan keh saku.

Sach kahu to,
jab hum pehli baar baat karne lage the,
mujhe nahi pata tha ki ek random conversation meri routine ka part ban jayegi.

Good mornings...
Good nights...
Din bhar ki updates...
Late night chats...
Hacking wali baatein rohit wale specially jisme mene tumhe bhut tang kiya...
Aur woh random conversations
jahan time ka pata hi nahi chalta tha...

Ye sab dheere dheere normal lagne laga.

Aur shayad isi wajah se jab misunderstandings hui,
maine kuch cheezon ko zarurat se zyada personally le liya.

Main perfect nahi hu.

Maine attitude bhi dikhaya.
Overreact bhi kiya.
Aur haan,
blocking wali bakchodi bhi galat thi.

Iske liye genuinely sorry.

Lekin ek baat hamesha sach rahegi.

Jo care tumne dikhayi.
Jo efforts tumne kiye.
Jo baar baar mujhe manaya jab main naraz tha.

Un sab ki value mujhe hai.

Shayad maine har baar properly appreciate nahi kiya.

Lekin maine notice kiya tha.

Mujhe pata hai hum dono ki expectations alag thi.

Kabhi trust ko lekar arguments hue.
Kabhi replies ko lekar.
Kabhi communication ko lekar.

Aur shayad dono taraf se mistakes hui.

Main kisi ko blame nahi karna chahta.

Bas itna kehna chahta hu ki agar maine tumhe hurt kiya hai,
intentionally ya unintentionally,

Aur honestly,
jitna maine socha hai,

mujhe lagta hai
zyada galti meri hi thi.

Kai jagah mujhe better handle karna chahiye tha.

Then I'm truly sorry ❤️

Life me bahut log milte hain.

Lekin bahut kam log aise hote hain,
jinke saath random conversations bhi yaad reh jaati hain.

Tum unhi logon me se ek ho.

Mujhe woh conversation bhi yaad hai
jab tumne bataya tha ki tumhare ghar rishta aaya tha.

Us waqt bhi mujhe lagta tha
ki tum mujhse apni baatein share karti ho
aur mujhe woh trust achha lagta tha.

Aur jab kabhi meri mood khrab hota tha bhen k wajah s theek nahi hoti thi,
tum puch leti thi.

Shayad us waqt main utna express nahi kar pata tha,
lekin mujhe woh care genuinely achhi lagti thi.

Aaj bhi kabhi kabhi automatically lagta hai,
ye baat Payal ko bata deta.

Fir yaad aata hai,
things are not the same anymore.

Maybe things will get better.

Maybe they won't.

Mujhe future ka nahi pata.

Bas itna pata hai
ki jo moments humne share kiye
wo mere liye genuine the.

But jo bhi ho,
main tumhare liye genuinely achha hi wish karta hu.

Aur agar kabhi tumhe lage ki baat karni chahiye,

I'm here.

No pressure.
No expectations.

Just honesty.

Waheguru ji sab theek karan 🙏

Aur agar kabhi tumhe lage
ki mujhe maaf kar sakti ho,

to mujhe khushi hogi.

Aur agar nahi bhi,
to bhi main tumhare liye achha hi wish karunga.

Still,
I Love You Payal ❤️

— Shivam ❤️`;

const btn = document.getElementById("openLetter");
const typedText = document.getElementById("typedText");

btn.addEventListener("click", () => {

document.getElementById("letterSection")
.classList.remove("hidden");

document.getElementById("timeline")
.classList.remove("hidden");

document.getElementById("finalSection")
.classList.remove("hidden");

btn.style.display = "none";

typeWriter();

window.scrollTo({
top: window.innerHeight,
behavior: "smooth"
});

});

function typeWriter(){

let i = 0;

function typing(){

if(i < letter.length){

typedText.innerHTML += letter.charAt(i);

i++;

setTimeout(typing,20);

}

}

typing();

}

const heartContainer =
document.querySelector(".floating-hearts");

function createHeart(){

const heart =
document.createElement("span");

heart.innerHTML = "❤️";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.animationDuration =
5 + Math.random() * 8 + "s";

heart.style.fontSize =
20 + Math.random() * 20 + "px";

heartContainer.appendChild(heart);

setTimeout(() => {

heart.remove();

},12000);

}

setInterval(createHeart,500);
exports.id=265,exports.ids=[265],exports.modules={71660:(e,t,a)=>{let r={"2492af2024c06b5f17f2c88ee4c23fb0368cfdf8":()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.emailVerificationTokenUpdate),"36523d563cadbd3915b8a9192a1c150329a4a3eb":()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.checkUserExistance),"42891e9ab4d3e6d65271791702723ee5466b5de6":()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.isUsersEmailVerified),"4ca1c57af74a52befbf8a75f0a06215ba5e19116":()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.getUser),"96ae9694ef864c0422a9f51dad914d3c3477b338":()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.createUser),bdc0ef0b670a11edd69e48c4561da8f0b237e568:()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.findUserByEmail),f84b3a1870ff959304659d4323c9164bc6e6a189:()=>Promise.resolve().then(a.bind(a,95305)).then(e=>e.verifyEmail),"7bdbbc54c502158522cca2f748c873aab050207d":()=>Promise.resolve().then(a.bind(a,89633)).then(e=>e.resendVerificationEmailAction),e025d111a5678561989007aa1943092907f8991c:()=>Promise.resolve().then(a.bind(a,89633)).then(e=>e.signUpAction)};async function i(e,...t){return(await r[e]()).apply(null,t)}e.exports={"2492af2024c06b5f17f2c88ee4c23fb0368cfdf8":i.bind(null,"2492af2024c06b5f17f2c88ee4c23fb0368cfdf8"),"36523d563cadbd3915b8a9192a1c150329a4a3eb":i.bind(null,"36523d563cadbd3915b8a9192a1c150329a4a3eb"),"42891e9ab4d3e6d65271791702723ee5466b5de6":i.bind(null,"42891e9ab4d3e6d65271791702723ee5466b5de6"),"4ca1c57af74a52befbf8a75f0a06215ba5e19116":i.bind(null,"4ca1c57af74a52befbf8a75f0a06215ba5e19116"),"96ae9694ef864c0422a9f51dad914d3c3477b338":i.bind(null,"96ae9694ef864c0422a9f51dad914d3c3477b338"),bdc0ef0b670a11edd69e48c4561da8f0b237e568:i.bind(null,"bdc0ef0b670a11edd69e48c4561da8f0b237e568"),f84b3a1870ff959304659d4323c9164bc6e6a189:i.bind(null,"f84b3a1870ff959304659d4323c9164bc6e6a189"),"7bdbbc54c502158522cca2f748c873aab050207d":i.bind(null,"7bdbbc54c502158522cca2f748c873aab050207d"),e025d111a5678561989007aa1943092907f8991c:i.bind(null,"e025d111a5678561989007aa1943092907f8991c")}},75530:(e,t,a)=>{Promise.resolve().then(a.bind(a,76256)),Promise.resolve().then(a.bind(a,90623))},49570:(e,t,a)=>{Promise.resolve().then(a.bind(a,34753))},42346:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,26840,23)),Promise.resolve().then(a.t.bind(a,38771,23)),Promise.resolve().then(a.t.bind(a,13225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,43982,23))},44462:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Form:()=>q,inputMediaQueryStyles:()=>G});var r=a(95344),i=a(8428),o=a(81202);a(13664);var s=a(28371),l=(0,s.$)("7bdbbc54c502158522cca2f748c873aab050207d"),n=(0,s.$)("e025d111a5678561989007aa1943092907f8991c"),d=a(90881);let c=()=>{let e=(0,i.usePathname)(),{fields:t,title:a}=d.Yc[e],r=(0,i.useSearchParams)(),s=r.get("email"),c=!!r.get("verification_sent"),p={[d._5.path]:n,[d.Ti.path]:l.bind(null,s),[d.H4.path]:d.vT},[b,m]=(0,o.useFormState)(p[e],{errors:{}});return{fields:t,title:a,formState:b,action:m,showAuthButtons:d.H4.path===e,showFormLink:e===d.H4.path||e===d._5.path,formLinkProps:e===d.H4.path?d._5:d.H4,verificationSent:c}};var p=a(98890),b=a(39549),m=a(64210);let h=(0,p.ZP)("div")({display:"flex",flexDirection:"column",marginBottom:"10px"}),f=(0,p.ZP)("label")({color:"black",fontSize:"20px",lineHeight:"26px",[m.A.mobile]:{fontSize:"16px",lineHeight:"22px"}}),g=(0,p.ZP)("span")({color:"grey",fontSize:"16px",lineHeight:"22px",[m.A.mobile]:{fontSize:"14px",lineHeight:"20px"}}),A=({children:e})=>(0,r.jsxs)(h,{children:[r.jsx(f,{children:e}),r.jsx(g,{children:"to continue to Laptops for everyone"})]});var u=a(3729),x=a(90163),w=a(80443),y=a(15309),v=a(55015),k=a(99825),P=a(41951),S=a(51402);let U=(0,p.ZP)("p")({color:"#d32f2f",fontFamily:'"Roboto","Helvetica","Arial",sans-serif',fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em",textAlign:"left",margin:"3px 14px 0"}),E=({error:e,errorText:t,fieldProps:a})=>{let[i,o]=(0,u.useState)(!1);return(0,r.jsxs)(x.Z,{sx:G,children:[r.jsx(S.Z,{children:a.label}),r.jsx(y.Z,{...a,error:e,type:i?"text":"password",endAdornment:r.jsx(v.Z,{position:"end",children:r.jsx(w.Z,{onClick:()=>o(e=>!e),edge:"end",children:i?r.jsx(P.Z,{}):r.jsx(k.Z,{})})})}),e&&r.jsx(U,{children:t})]})};var T=a(89410),j=a(47674),I=a(32401);let R=(0,p.ZP)("div")({display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}),D=()=>r.jsx(R,{children:d.Ls.map(({src:e,alt:t,authentificationMethod:a})=>r.jsx(I.Z,{onClick:()=>(0,j.signIn)(a,{callbackUrl:"/"}),children:r.jsx(T.default,{src:e,alt:t,width:25,height:25})},t))}),B=(0,p.ZP)("div")({display:"flex",gap:"10px",alignItems:"center"}),V=(0,p.ZP)("hr")({border:"1px solid #d6d6d6",width:"100%"}),z=(0,p.ZP)("span")({color:"grey",fontSize:"14px",lineHeight:"22px"}),H=()=>(0,r.jsxs)(B,{children:[r.jsx(V,{}),r.jsx(z,{children:"or"}),r.jsx(V,{})]}),C=(0,p.ZP)("label")({display:"flex",justifyContent:"center",color:"green",fontSize:"16px",lineHeight:"22px"});var F=a(56506);let M=(0,p.ZP)("p")({display:"flex",justifyContent:"flex-end",color:"gray",a:{textDecoration:"none",marginLeft:"5px",color:"blue"},[m.A.mobile]:{fontSize:"14px"}}),L=({formLinkProps:{path:e,title:t,subTitle:a}})=>(0,r.jsxs)(M,{children:[a,r.jsx(F.default,{href:e,children:t})]});var _=a(60959),Z=a(44504);let N=(0,p.ZP)("button")(d.nc),O=(0,p.ZP)(_.Z)({padding:"25px 20px",background:"#D3D3D3"}),W=()=>{let{pending:e}=(0,o.useFormStatus)();return e?r.jsx(O,{loading:!0,loadingIndicator:r.jsx(Z.Z,{color:"inherit",size:24}),variant:"outlined"}):r.jsx(N,{type:"submit",children:"Continue"})},X=(0,p.ZP)("form")({width:"100%",padding:"30px 40px 50px",background:"white",display:"flex",flexDirection:"column",gap:"25px",borderRadius:"10px",[m.A.mobile]:{gap:"20px",padding:"20px 30px 40px"}}),G={[m.A.mobile]:{"& .mui-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":{fontSize:"14px"},"& .mui-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{padding:"14px 14px"}}},q=()=>{let{fields:e,title:t,verificationSent:a,formState:i,action:o,showAuthButtons:s,showFormLink:l,formLinkProps:n}=c();return(0,r.jsxs)(X,{action:o,children:[r.jsx(A,{children:t}),a&&r.jsx(C,{children:d.Ti.subTitle}),s&&(0,r.jsxs)(r.Fragment,{children:[r.jsx(D,{}),r.jsx(H,{})]}),e?.map(e=>{let t=i?.errors[e.id];return d.fV(e.id)?r.jsx(E,{error:!!t,errorText:t&&t[0],fieldProps:e},e.id):r.jsx(b.Z,{error:!!t,helperText:t&&t[0],...e,sx:G},e.id)}),r.jsx(W,{}),l&&r.jsx(L,{formLinkProps:n})]})}},34753:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AuthLayout:()=>l});var r=a(95344),i=a(98890);let o=(0,i.ZP)("section")({background:"black",backgroundImage:"linear-gradient(#02294F, #000)",backgroundSize:"100% 45%",backgroundRepeat:"no-repeat",backgroundPosition:"top",minHeight:"100vh",display:"flex",justifyContent:"center"}),s=(0,i.ZP)("div")({maxWidth:"30%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (max-width: 1079px)":{maxWidth:"50%"},"@media (max-width: 767px)":{maxWidth:"70%"}}),l=({children:e})=>r.jsx(o,{children:r.jsx(s,{children:e})})},76256:(e,t,a)=>{"use strict";a.r(t),a.d(t,{SessionWrapper:()=>o});var r=a(95344),i=a(47674);let o=({children:e})=>r.jsx(i.SessionProvider,{children:e})},48853:(e,t,a)=>{"use strict";a.d(t,{GY:()=>s,i$:()=>i,lm:()=>o}),a(13664);var r=a(28371),i=(0,r.$)("42891e9ab4d3e6d65271791702723ee5466b5de6");(0,r.$)("36523d563cadbd3915b8a9192a1c150329a4a3eb"),(0,r.$)("96ae9694ef864c0422a9f51dad914d3c3477b338");var o=(0,r.$)("f84b3a1870ff959304659d4323c9164bc6e6a189");(0,r.$)("2492af2024c06b5f17f2c88ee4c23fb0368cfdf8");var s=(0,r.$)("bdc0ef0b670a11edd69e48c4561da8f0b237e568");(0,r.$)("4ca1c57af74a52befbf8a75f0a06215ba5e19116")},90881:(e,t,a)=>{"use strict";a.d(t,{Yc:()=>h,Ti:()=>b,H4:()=>c,_5:()=>p,Ls:()=>A,pu:()=>x,if:()=>u,nc:()=>w,fV:()=>f,vT:()=>y});var r=a(95344),i=a(29709),o=a(47674),s=a(29057),l=a(42174),n=a(48853);let d={signIn:"/signIn",signUp:"/signUp",verifyEmailSend:"/verify-email/send",verifyEmail:"/verify-email"},c={path:d.signIn,title:"Sign in",subTitle:"Already have an account?"},p={path:d.signUp,title:"Sign up",subTitle:"Don't have an account?"},b={path:d.verifyEmailSend,title:"Resend a verification link",subTitle:"A verification link has been sent to your email."},m={username:{id:"username",label:"User Name",name:"username",autoFocus:!0,inputlabelprops:{style:{fontSize:"16px"}}},email:{id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputlabelprops:{style:{fontSize:"16px"}}},password:{id:"password",label:"Password",name:"password",autoComplete:"current-password",inputlabelprops:{style:{fontSize:"16px"}}},confirmPassword:{id:"confirmPassword",label:"Confirm Password",name:"confirmPassword",autoComplete:"current-password",inputlabelprops:{style:{fontSize:"16px"}}}},h={[c.path]:{fields:[m.email,m.password],title:c.title},[p.path]:{fields:[m.username,m.email,m.password,m.confirmPassword],title:p.title},[b.path]:{title:b.title}},f=e=>"password"===e||"confirmPassword"===e;i.Ry({username:i.Z_().min(1,"Username is required").max(100),email:i.Z_().min(1,"Email is required").email("Invalid email"),password:i.Z_().min(1,"Password is required").min(8,"Password must have 8 characters"),confirmPassword:i.Z_().min(1,"Password confirmation is required")}).refine(({password:e,confirmPassword:t})=>e===t,{path:["confirmPassword"],message:"Password do not match"});let g=i.Ry({email:i.Z_().min(1,"Email is required").email("Invalid email"),password:i.Z_().min(1,"Password is required").min(8,"Password must have 8 characters")}),A=[{src:{src:"/_next/static/media/discord.7f0086c9.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVca8Fba79dbMJbar9car5ba8Bca8FdacBcar5basBbar9ca79hccsrdnrFAAAADHRSTlP7F6q6RoTqNVvRiXkwGWRIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADdJREFUeJwlyjESwCAMxEDd2RhI/P/3ZiCqthCjAXrgH8akNDERypSDsNY6cG9qt3nOW2V0m+8HH8IA5fH+DeUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},alt:"Discord Icon",authentificationMethod:"discord"},{src:{src:"/_next/static/media/facebook.eb5d4246.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUadtMZdtIeetYTc9L+/vwIbNCOu+dand7l7vavzu0sgtXV5fQ8ithrpuHHgndyAAAAAXRSTlPJol6icgAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA4SURBVHicHcnJDcBADMNAUbK9OftvN9i8CAwlQzr6+8yKAO56W5CrJhbxUTVbWHUamaSmLTne5wMflgDh1U3BvgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Facebook Icon",authentificationMethod:"facebook"},{src:{src:"/_next/static/media/google.aa4f9068.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXETf+sNukv92wATsUfXPyIYe/cWgvAWfuWzgSH+Sij9TyHXPyLaPyTcQSMVetnhQiMPk1ITkKD/IgAMmysTuEn/TScSsUYRrkgXfeT/Oir9SCXm1Qj/SiUae+B+xij/xwT+ixX/3gAQoT7OhiTTAAAAInRSTlMAtvGeLq0u9q0F8i00eP0w/rn1D53+/rie5DCes7iQ/LP8b5PcKgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABDSURBVHicHcZFEoAwEADBSUjYCO6u//8jVfSpIe5DZTOIIay2yOG6F2g9PAn+UM79cbMI22kgFYXReuoaKcGM/VunfG5IAv6yjnTbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},alt:"Google Icon",authentificationMethod:"google"}],u=e=>({[d.verifyEmailSend]:{icon:r.jsx(s.Z,{sx:{fontSize:e},color:"secondary"})},[d.verifyEmail]:{icon:r.jsx(l.Z,{sx:{fontSize:e},color:"secondary"})}}),x={mediaQuery:"(max-width: 767px)",small:"100px",large:"200px"},w={background:"black",backgroundImage:"linear-gradient(#02294F, #090E10)",backgroundSize:"100% 20%",backgroundRepeat:"no-repeat",padding:"15px 20px",color:"white",fontSize:"18px",marginBottom:"8px",border:"1px solid black",borderRadius:"5px",":hover":{background:"white",color:"black",opacity:.75,transition:"all .7s ease-in-out"},"@media (max-width: 767px)":{fontSize:"14px",":hover":{background:"black",color:"white",opacity:1,transition:"none"}}},y=async(e,t)=>{let{success:a,data:r,error:i}=g.safeParse({email:t.get("email"),password:t.get("password")});if(!a)return{errors:i.flatten().fieldErrors};try{await (0,n.i$)(r.email),await (0,o.signIn)("credentials",{email:r.email,password:r.password,callbackUrl:"/"})}catch(e){if(e){if("CredentialsSignin"===e.type)return{errors:"Invalid credentials."};return{errors:"Something went wrong."}}throw e}}},64210:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r={tablet:"@media (max-width: 1079px)",mobile:"@media (max-width: 767px)"};process.env.PRODUCTION_URL},6814:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(25036),i=a(86843);let o=(0,i.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/Layouts/AuthLayout.jsx`),{__esModule:s,$$typeof:l}=o;o.default;let n=(0,i.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/Layouts/AuthLayout.jsx#AuthLayout`);function d({children:e}){return r.jsx(n,{children:e})}},10888:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m,metadata:()=>b});var r=a(25036),i=a(74932),o=a.n(i),s=a(54346),l=a(86843);let n=(0,l.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/SessionWrapper.jsx`),{__esModule:d,$$typeof:c}=n;n.default;let p=(0,l.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/SessionWrapper.jsx#SessionWrapper`);a(67272);let b={title:"Laptops for everyone",description:"Buy laptops for yourself"};function m({children:e}){return r.jsx(p,{children:r.jsx("html",{lang:"en",children:r.jsx("body",{className:o().className,children:r.jsx(s.ZP,{children:e})})})})}},82725:(e,t,a)=>{"use strict";a.d(t,{l:()=>l});var r=a(86843);let i=(0,r.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/Form/Form.jsx`),{__esModule:o,$$typeof:s}=i;i.default,(0,r.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/Form/Form.jsx#inputMediaQueryStyles`);let l=(0,r.createProxy)(String.raw`/Users/yihnatchuk/Downloads/Store/my-store/components/Form/Form.jsx#Form`)},89633:(e,t,a)=>{"use strict";a.r(t),a.d(t,{resendVerificationEmailAction:()=>b,signUpAction:()=>p});var r=a(98601);a(75811);var i=a(52810),o=a(77949),s=a(49048),l=a(25703),n=a(74674),d=a(95305),c=a(46893);let p=async(e,t)=>{console.log((0,o.headers)().get("x-forwarded-host"),"forwardedFor");let{data:a,success:r,error:n}=s.signUpShema.safeParse({username:t.get("username"),email:t.get("email"),password:t.get("password"),confirmPassword:t.get("confirmPassword")});if(console.log(a,"data"),console.log("production","process.env.NODE_ENV"),console.log(l.BASE_URL,"BASE_URL"),!r)return{errors:n.flatten().fieldErrors};let d=process.env.PRODUCTION_URL;(0,o.cookies)().set("host-1",process.env.NEXTAUTH_URL),(0,o.cookies)().set("host-2",d),(0,o.cookies)().set("val","hello");try{await fetch(`${d}/api/user`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.username,email:a.email,password:a.password})})}catch(e){console.error(e)}(0,i.redirect)(`/verify-email/send?email=${a.email}&verification_sent=1`)},b=async e=>{let t=(0,n.generateEmailVerificationToken)();try{await (0,d.emailVerificationTokenUpdate)(e,t),await (0,n.sendVerificationEmail)(e,t)}catch(e){return{errors:"Something went wrong."}}};(0,c.ensureServerEntryExports)([p,b]),(0,r.createActionProxy)("e025d111a5678561989007aa1943092907f8991c",p),(0,r.createActionProxy)("7bdbbc54c502158522cca2f748c873aab050207d",b)},74674:(e,t,a)=>{"use strict";a.d(t,{generateEmailVerificationToken:()=>p,sendVerificationEmail:()=>c});var r=a(98601);a(75811);var i=a(1102),o=a(6113),s=a(36192),l=a(36291),n=a(46893);let d=e=>i.compile(l.emailVerificationTemplate)({url:e}),c=async(e,t)=>{let a=s.createTransport({service:"gmail",auth:{user:process.env.SMTP_EMAIL,pass:process.env.SMTP_PASSWORD}}),r={from:'"Laptops for everyone" <LapropsForEveryone@gmail.com>',to:e,subject:"Email Verification",html:d(`${process.env.NEXTAUTH_URL}/verify-email?email=${e}&token=${t}`)};try{await a.sendMail(r)}catch(e){console.error("Failed to send email:",e)}},p=()=>(0,o.randomBytes)(32).toString("hex");(0,n.ensureServerEntryExports)([c,p]),(0,r.createActionProxy)("d9012d36416cd84be9e3b5dcb6bcd8163a8dffd1",c),(0,r.createActionProxy)("fd879cfb53324f1dec32b24a452931c407772ec9",p)},69976:(e,t,a)=>{"use strict";let r;a.d(t,{prisma:()=>r}),r=new(a(53524)).PrismaClient},95305:(e,t,a)=>{"use strict";a.r(t),a.d(t,{checkUserExistance:()=>s,createUser:()=>l,emailVerificationTokenUpdate:()=>d,findUserByEmail:()=>c,getUser:()=>p,isUsersEmailVerified:()=>b,verifyEmail:()=>n});var r=a(98601);a(75811);var i=a(69976),o=a(46893);let s=async(e,t)=>await i.prisma.user.findUnique({where:{email:e,username:t}}),l=async e=>await i.prisma.user.create({data:e}),n=e=>i.prisma.user.update({where:{email:e},data:{emailVerifiedAt:new Date,emailVerifToken:null}}),d=async(e,t)=>await i.prisma.user.update({where:{email:e},data:{emailVerifToken:t}}),c=async e=>await i.prisma.user.findFirst({where:{email:e}}),p=async e=>{try{return await c(e)}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}},b=async e=>{let t=await i.prisma.user.findFirst({where:{email:e}});if(!t)return!0;if(!t?.emailVerifiedAt)throw new EmailNotVerifiedError(`EMAIL_NOT_VERIFIED:${e}`);return!0};(0,o.ensureServerEntryExports)([s,l,n,d,c,p,b]),(0,r.createActionProxy)("36523d563cadbd3915b8a9192a1c150329a4a3eb",s),(0,r.createActionProxy)("96ae9694ef864c0422a9f51dad914d3c3477b338",l),(0,r.createActionProxy)("f84b3a1870ff959304659d4323c9164bc6e6a189",n),(0,r.createActionProxy)("2492af2024c06b5f17f2c88ee4c23fb0368cfdf8",d),(0,r.createActionProxy)("bdc0ef0b670a11edd69e48c4561da8f0b237e568",c),(0,r.createActionProxy)("4ca1c57af74a52befbf8a75f0a06215ba5e19116",p),(0,r.createActionProxy)("42891e9ab4d3e6d65271791702723ee5466b5de6",b)},36291:(e,t,a)=>{"use strict";a.d(t,{emailVerificationTemplate:()=>r});let r=`
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:620px) {
			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if true]><style>.forceBgColor{background-color: white !important}</style><![endif]-->
</head>

<body class="forceBgColor" style="background-color: transparent; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: transparent;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #412678;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 210px;"><a href="https://www.example.com/" target="_blank" style="outline:none" tabindex="-1"><img src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/qilo43kn/jgw/z0p/888/Screenshot%202024-03-01%20at%2019.43.19.png" style="display: block; height: auto; border: 0; width: 100%;" width="210" alt="Placeholder logo" title="Placeholder logo"></a></div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #412678;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;font-family:TimesNewRoman,'Times New Roman',Times,Beskerville,Georgia,serif;font-size:38px;letter-spacing:2px;line-height:120%;text-align:center;mso-line-height-alt:45.6px;">
																	<p style="margin: 0; word-break: break-word;"><strong><em><span>Laptops for everyone</span></em></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 570px;"><img src="https://84be296bee.imgdist.com/pub/bfra/qilo43kn/39g/2lz/9ev/EmailBackground.jpeg" style="display: block; height: auto; border: 0; width: 100%;" width="570" alt="World book day graphic header" title="World book day graphic header"></div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9b134;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:10px;line-height:10px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #edc64d;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#412678;font-family:'Montserrat','Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:28px;line-height:120%;text-align:center;mso-line-height-alt:33.6px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span>Click the button below to verify the email</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
													<table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{url}}" style="height:48px;width:173px;v-text-anchor:middle;" arcsize="12%" strokeweight="0.75pt" strokecolor="#412678" fill="false">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#412678; font-family:Arial, sans-serif; font-size:16px">
<![endif]--><a href="{{url}}" target="_blank" style="text-decoration:none;display:inline-block;color:#412678;background-color:transparent;border-radius:5px;width:auto;border-top:1px solid #412678;font-weight:400;border-right:1px solid #412678;border-bottom:1px solid #412678;border-left:1px solid #412678;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:55px;padding-right:55px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">VERIFY</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #200c4e;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:25px;">
																<div style="color:#ffffff;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
																	<p style="margin: 0; word-break: break-word;">Copyright \xa9 2024 Laptops for everyone, All rights reserved.</p>
																	<p style="margin: 0; word-break: break-word;">&nbsp;</p>
																	<p style="margin: 0; word-break: break-word;">Want to change how you receive these emails?<br>You can <a href="https://www.example.com/" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">update your preferences</a> or <a href="https://www.example.com/" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">unsubscribe</a> from this list.</p>
																	<p style="margin: 0; word-break: break-word;"><span>&nbsp;</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
`},49048:(e,t,a)=>{"use strict";a.d(t,{signUpShema:()=>b}),a(90119);var r=a(86412);a(25224);var i=a(49278),o=a(69049),s=a(36350);a(95305);let l={signIn:"/signIn",signUp:"/signUp",verifyEmailSend:"/verify-email/send"},n={path:l.signIn,title:"Sign in",subTitle:"Already have an account?"},d={path:l.signUp,title:"Sign up",subTitle:"Don't have an account?"},c={path:l.verifyEmailSend,title:"Resend a verification link",subTitle:"A verification link has been sent to your email."},p={username:{id:"username",label:"User Name",name:"username",autoFocus:!0,inputlabelprops:{style:{fontSize:"16px"}}},email:{id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputlabelprops:{style:{fontSize:"16px"}}},password:{id:"password",label:"Password",name:"password",autoComplete:"current-password",inputlabelprops:{style:{fontSize:"16px"}}},confirmPassword:{id:"confirmPassword",label:"Confirm Password",name:"confirmPassword",autoComplete:"current-password",inputlabelprops:{style:{fontSize:"16px"}}}};n.path,p.email,p.password,n.title,d.path,p.username,p.email,p.password,p.confirmPassword,d.title,c.path,c.title;let b=r.object({username:r.string().min(1,"Username is required").max(100),email:r.string().min(1,"Email is required").email("Invalid email"),password:r.string().min(1,"Password is required").min(8,"Password must have 8 characters"),confirmPassword:r.string().min(1,"Password confirmation is required")}).refine(({password:e,confirmPassword:t})=>e===t,{path:["confirmPassword"],message:"Password do not match"});r.object({email:r.string().min(1,"Email is required").email("Invalid email"),password:r.string().min(1,"Password is required").min(8,"Password must have 8 characters")}),i.default,o.default,s.default},25703:(e,t,a)=>{"use strict";a.d(t,{BASE_URL:()=>r});let r=process.env.PRODUCTION_URL},49278:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r={src:"/_next/static/media/discord.7f0086c9.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVca8Fba79dbMJbar9car5ba8Bca8FdacBcar5basBbar9ca79hccsrdnrFAAAADHRSTlP7F6q6RoTqNVvRiXkwGWRIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADdJREFUeJwlyjESwCAMxEDd2RhI/P/3ZiCqthCjAXrgH8akNDERypSDsNY6cG9qt3nOW2V0m+8HH8IA5fH+DeUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},69049:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r={src:"/_next/static/media/facebook.eb5d4246.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUadtMZdtIeetYTc9L+/vwIbNCOu+dand7l7vavzu0sgtXV5fQ8ithrpuHHgndyAAAAAXRSTlPJol6icgAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA4SURBVHicHcnJDcBADMNAUbK9OftvN9i8CAwlQzr6+8yKAO56W5CrJhbxUTVbWHUamaSmLTne5wMflgDh1U3BvgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},36350:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r={src:"/_next/static/media/google.aa4f9068.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXETf+sNukv92wATsUfXPyIYe/cWgvAWfuWzgSH+Sij9TyHXPyLaPyTcQSMVetnhQiMPk1ITkKD/IgAMmysTuEn/TScSsUYRrkgXfeT/Oir9SCXm1Qj/SiUae+B+xij/xwT+ixX/3gAQoT7OhiTTAAAAInRSTlMAtvGeLq0u9q0F8i00eP0w/rn1D53+/rie5DCes7iQ/LP8b5PcKgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABDSURBVHicHcZFEoAwEADBSUjYCO6u//8jVfSpIe5DZTOIIay2yOG6F2g9PAn+UM79cbMI22kgFYXReuoaKcGM/VunfG5IAv6yjnTbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},4998:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(70337);let i=e=>[{type:"image/png",sizes:"1006x588",url:(0,r.fillMetadataSegment)(".",e.params,"icon.png")+"?f24f1b1f9d814725"}]},67272:()=>{}};
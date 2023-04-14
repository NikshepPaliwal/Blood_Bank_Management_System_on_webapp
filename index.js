const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// const staticPath=path.join(__dirname,"./BloodBank");
// const img=path.join(__dirname,"./images");
// console.log(staticPath);
// app.use(express.static(img));
// console.log(img);
// app.use(express.static(staticPath));
// app.get("/:universalURL", (req, res) => {
//     res.send("404 URL NOT FOUND");
// });

require("./src/db/conn");
const User = require("./src/models/user_reg");

// const { doesNotReject } = require("assert");
// console.log(User);
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/views");
const alpha = path.join(__dirname, "/templates/partials"); 
console.log(alpha);
console.log(static_path);
app.use(express.static(static_path))
app.set("view engine", "hbs");
hbs.registerPartials(partials_path);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.set("views", template_path);

app.get("/", (req, resp) => {
    resp.render("index");
});
app.get("/admin_page", (req, resp) => {
    resp.render("admin_page");
});
app.get("/donor_login", (req, resp) => {
    resp.render("donor_login");
});
app.get("/user_reg", (req, resp) => {
    resp.render("user_reg");
});
app.get("/success",(req,resp)=>{
    resp.render("success");
})
app.get("/forget",(req,resp)=>{
    resp.render("forget");
})
app.get("/add_donor_by_admin",(req,resp)=>{
    resp.render("add_donor_by_admin");
})
app.get("/view_donor_profile",(req,resp)=>{
    resp.render("view_donor_profile");
})
app.get("/forget",(req,resp)=>{
    resp.render("forget");
})

//Donor registration code
 
app.post("/user_reg", async (req, resp) => {
    try {
        const firstn = req.body.fullname;
        
        const DOB = req.body.dob;
        const firstl = req.body.firstline;
        
        const p = req.body.pin;
        const c = req.body.contact;
        const gn = req.body.gender;
        const bg = req.body.bloodgroup;
        const em = req.body.email;
        const pass = req.body.password;

        const userreg = new User({
            fullname: firstn,
           
            dob: DOB,
            firstline: firstl,
            
            pin: p,
            contact: c,
            gender:gn,
            bloodgroup: bg,
            email: em,
            password: pass
        });
        
        await userreg.save();
        console.log(userreg);
        resp.status(201).render("index");
    } catch (error) {
        resp.status(400).send(error);
        console.log(error);
    }
})


app.post("/donor_login", async (req, resp) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({ email: email }, (err, result) => {
            
            if (email === result.email && password === result.password) {
                resp.status(201).render("index");
            } else {
                resp.send("Invalid Login Detail");
            }

        });

    } catch (error) {
        resp.status(400).send("Invalid Login Details");
    }
})


//   Blood Bank Registration.............>

const Admin = require("./src/models/admin_reg");
const { application } = require("express");
app.get("/admin_registration", (req, resp) => {
    resp.render("admin_registration");
})
app.post("/admin_registration", async (req, resp) => {
    try {
        const firstn = req.body.bankname;

        const firstl = req.body.firstline;
        const secondl = req.body.secondline;

        const p = req.body.pin;
        const c = req.body.contact;

        const em = req.body.email;
        const password = req.body.password;

        const adminreg = new Admin({
            bankname: firstn,
            firstline: firstl,
            secondline: secondl,
            pin: p,
            contact: c,
            email: em,
            password: password
        });

        await adminreg.save();
        console.log(adminreg);
        resp.status(201).render("index");
    } catch (error) {
        resp.status(400).send(error);
        console.log(error);
    }
})


app.post("/admin_page", async (req, resp) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        Admin.findOne({ email: email }, (err, result) => {
            //   console.log(result);
            if (email === result.email && password === result.password) {

                resp.status(201).render("index");
            } else {
                resp.send("Invalid Login Detail");
            }

        });

    } catch (error) {
        resp.status(400).send("Invalid Login Details");
    }
})



// Add Donor By Admin....
app.post("/add_donor_by_admin", async (req, resp) => {
    try {
        const firstn = req.body.fullname;
        
        const DOB = req.body.dob;
        const firstl = req.body.firstline;
        const secondl = req.body.secondline;
        const p = req.body.pin;
        const c = req.body.contact;
        const gn = req.body.gender;
        const bg = req.body.bloodgroup;
        const em = req.body.email;
        const pass = req.body.password;



        const userreg = new User({
           fullname: firstn,
          
            dob: DOB,
            firstline: firstl,
            secondline: secondl,
            
            pin: p,
            contact: c,
            gender:gn,
            bloodgroup: bg,
            email: em,
            password: pass
        });
        
        await userreg.save();
        console.log(userreg);
        resp.status(201).render("index");
    } catch (error) {
        resp.status(400).send(error);
        console.log(error);
    }
})
app.get("/contact_us", (req,resp)=>{
    resp.render("contact_us");
})



const Queries = require("./src/models/contact_us");

app.post("/contact_us", async (req, resp) => {
    try {
        const em = req.body.email;
        const firstn = req.body.name;
        const bg = req.body.bloodgroup;
        const mob= req.body.Mob;
        
        const subject = req.body.Sub;

        const contact = new Queries({
            email: em,
            name: firstn,
    
            Mob: mob,
            Sub: subject,
            
        });
        
        await contact.save();
        console.log(contact);
        resp.status(201).render("index");
    } catch (error) {
        resp.status(400).send(error);
        console.log(error);
    }
})  


// blood request....

app.get("/blood_seeker", (req,resp)=>{
    resp.render("blood_seeker");
})



const Blood_Seeker = require("./src/models/blood_seeker");
const { db } = require("./src/models/user_reg");

app.post("/blood_seeker", async (req, resp) => {
    try {
        
        const firstn = req.body.patient_name;
        const Disease=req.body.disease;
        const bg = req.body.bloodgroup;
        const mob= req.body.Mob;
        
        const Unit = req.body.unit;

        const request = new Blood_Seeker({
           
           patient_name: firstn,
           disease:Disease,
           bloodgroup:bg,
            Mob: mob,
            unit:Unit,
            
        });
        
        await request.save();
        console.log(request);
        resp.status(201).render("index");
    } catch (error) {
        resp.status(400).send(error);
        console.log(error);
    }
})

app.get("/dashboard", (req,resp)=>{
    User.find({})
    .then((x)=>{
    resp.render("../partials/dashboard.ejs",{x})
    // console.log(x)
    })
    .catch((y)=>{
        console.log(y);
    })
});


app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})

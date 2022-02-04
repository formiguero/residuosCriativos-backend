const nodemailer=require('nodemailer');

const sendEmail=async (email,subject,text)=>{
    
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'josuesantosnasc@gmail.com',
                pass:'xxxxxx'
            }
        })

        let mailDetails={
            from:'josuesantosnasc@gmail.com',
            to:`${email}`,
            subject:`${subject}`,
            text:`${text}`
        }

        transporter.sendMail(mailDetails,(err,data)=>{
            if(err){
                console.log(`Error occurs:${err}`)
            }else{
                console.log('Email sent successfully');
            }
        })
    
}

module.exports=sendEmail;
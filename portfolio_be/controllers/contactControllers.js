const Contact = require("../models/Contact");

const transporter = require("../config/mail");

/* Send Message */

const sendMessage = async (req, res) => {

  try {

    const {
      name,
      email,
      subject,
      message
    } = req.body;

    /* Validation */

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {

      return res.status(400).json({
        success:false,
        message:"All fields are required"
      });
    }

    /* Save MongoDB */

    const newMessage = await Contact.create({
      name,
      email,
      subject,
      message
    });

    /* Send Email */

    // await transporter.sendMail({

    //   from:email,

    //   to:process.env.EMAIL_USER,

    //   subject:`Portfolio Contact: ${subject}`,

    //   html:`

    //     <h2>New Portfolio Message</h2>

    //     <p><strong>Name:</strong> ${name}</p>

    //     <p><strong>Email:</strong> ${email}</p>

    //     <p><strong>Subject:</strong> ${subject}</p>

    //     <p><strong>Message:</strong></p>

    //     <p>${message}</p>

    //   `
    // });

    res.status(201).json({

      success:true,

      message:"Message sent successfully",

      data:newMessage
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success:false,

      message:"Server Error"
    });
  }
};

/* Get Messages */

const getMessages = async (req, res) => {

  try {

    const messages = await Contact
      .find()
      .sort({ createdAt:-1 });

    res.status(200).json({

      success:true,

      count:messages.length,

      data:messages
    });

  } catch (error) {

    res.status(500).json({

      success:false,

      message:"Server Error"
    });
  }
};

module.exports = {
  sendMessage,
  getMessages
};
// Copyright (c) 2024, Vishal Haldar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Interview Schedule", {

	refresh(frm) {

        if (frm.doc.status === "In progress"){

            frm.add_custom_button("Hired",()=>{

                frm.set_value("status","Hired");

                // frappe.show_alert("Hired");

                frm.save();

            },"Status");

            frm.add_custom_button("Rejected",()=>{

                frm.set_value("status","Rejected");

                // frappe.show_alert("Rejected");

                frm.save();
                
            },"Status");
        
        };

	},
    
});


  

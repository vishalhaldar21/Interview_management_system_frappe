# Copyright (c) 2024, Vishal Haldar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class InterviewSchedule(Document):
	
 
   def on_trash(self):
       
        frappe.msgprint(f"{self.candidate_name}'s record has been moved to the trash.")
        
   

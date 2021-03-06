//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiYouLab.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Patient
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Patient()
        {
            this.Consultation = new HashSet<Consultation>();
        }
    
        public int ID_P { get; set; }
        public string Nom_P { get; set; }
        public string Prenom_P { get; set; }
        public string Adresse { get; set; }
        public Nullable<int> Telephone { get; set; }
        public Nullable<System.DateTime> Date_Naiss { get; set; }
        public string CIN { get; set; }
        public string Securite_social { get; set; }
        public string Email { get; set; }
        public string Sexe { get; set; }
        public string Groupe_sanguin { get; set; }
        public string User_name { get; set; }
        public string Password { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Consultation> Consultation { get; set; }
    }
}

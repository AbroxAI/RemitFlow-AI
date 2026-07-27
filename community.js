(function () {
  'use strict';

  // ==================== 351 PERSONAS (with language traits) ====================
  const remittancePersonas = [
    // BANGLADESH (60) - lang: bengali, moderate typo/emoji
    { name: "Rafiq Ahmed", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Farzana Chowdhury", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.5 },
    { name: "Sakib Hasan", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.05, emojiRate: 0.3 },
    { name: "Nasrin Sultana", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Tanvir Islam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.35 },
    { name: "Sharmin Akter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Mamun Hossain", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.3 },
    { name: "Rokeya Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Zahidul Karim", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Shirin Sultana", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.45 },
    { name: "Anwarul Azim", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.05, emojiRate: 0.3 },
    { name: "Tahmina Yasmin", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Nurul Alam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.35 },
    { name: "Hasina Khatun", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Kamal Uddin", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.3 },
    { name: "Rashida Parvin", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.45 },
    { name: "Shafiqul Islam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.4 },
    { name: "Ayesha Siddiqua", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.5 },
    { name: "Mizanur Rahman", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.35 },
    { name: "Fatema Tuz Zohra", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Habibur Rahman", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.3 },
    { name: "Nargis Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.45 },
    { name: "Abul Kashem", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Rehana Parveen", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Moshiur Rahman", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.35 },
    { name: "Khaleda Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.4 },
    { name: "Jahangir Alam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.3 },
    { name: "Morium Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Shahidul Islam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Shahanaz Parvin", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.5 },
    { name: "Abdur Rahim", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.35 },
    { name: "Rowshan Ara", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.4 },
    { name: "Moniruzzaman Khan", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.3 },
    { name: "Sultana Razia", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.45 },
    { name: "Golam Mostafa", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.4 },
    { name: "Amena Khatun", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Ruhul Amin", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.35 },
    { name: "Shahida Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.4 },
    { name: "Fazlur Rahman", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.3 },
    { name: "Rina Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Rashedul Haque", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Nazma Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.5 },
    { name: "Shamsul Huda", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.35 },
    { name: "Safia Khatun", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.4 },
    { name: "Azizul Haque", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.3 },
    { name: "Mahmuda Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.45 },
    { name: "Rafiqul Islam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.4 },
    { name: "Anwara Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Abdus Sattar", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.35 },
    { name: "Saleha Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.4 },
    { name: "Mofizur Rahman", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.3 },
    { name: "Jharna Begum", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Saiful Islam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.4 },
    { name: "Rubina Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.5 },
    { name: "Robiul Alam", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.35 },
    { name: "Parvin Sultana", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.4 },
    { name: "Alamgir Hossain", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.1, emojiRate: 0.3 },
    { name: "Jobeda Khatun", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.12, emojiRate: 0.45 },
    { name: "Rafiqul Bashar", gender: "men", country: "Bangladesh", lang: "bengali", typoRate: 0.15, emojiRate: 0.4 },
    { name: "Rahima Akhter", gender: "women", country: "Bangladesh", lang: "bengali", typoRate: 0.08, emojiRate: 0.5 },

    // USA (60) - lang: english, low typo, moderate emoji
    { name: "Michael Chen", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Jessica Williams", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.15 },
    { name: "David Rodriguez", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Amanda Thompson", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "James Martinez", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.2 },
    { name: "Sarah Johnson", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Christopher Lee", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Emily Davis", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Daniel Garcia", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Ashley Wilson", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.2 },
    { name: "Matthew Brown", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.15 },
    { name: "Stephanie Anderson", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.28 },
    { name: "Ryan Taylor", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Nicole Thomas", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Kevin Jackson", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Rachel White", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.18 },
    { name: "Brandon Harris", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Megan Clark", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Joshua Lewis", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Lauren Walker", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Andrew Hall", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.2 },
    { name: "Brittany Allen", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.15 },
    { name: "Justin Young", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Tiffany King", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Tyler Wright", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Heather Scott", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Ethan Green", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.2 },
    { name: "Danielle Adams", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Aaron Baker", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.28 },
    { name: "Samantha Nelson", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Patrick Hill", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Christina Rivera", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.15 },
    { name: "Kyle Campbell", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Laura Mitchell", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Benjamin Carter", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.18 },
    { name: "Amber Roberts", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Nathan Phillips", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Victoria Evans", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Gregory Turner", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.28 },
    { name: "Melissa Collins", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Samuel Parker", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Kathryn Edwards", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.15 },
    { name: "Derek Stewart", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.22 },
    { name: "Cynthia Morris", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Marcus Sanchez", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.18 },
    { name: "Patricia Reed", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Timothy Cook", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Deborah Morgan", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Jeffrey Bell", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.28 },
    { name: "Rebecca Murphy", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Steven Cooper", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.22 },
    { name: "Sharon Richardson", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.15 },
    { name: "Larry Osagie", gender: "men", country: "USA", lang: "english", typoRate: 0.04, emojiRate: 0.2 },
    { name: "Diane Ward", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Frank Bailey", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Janet Foster", gender: "women", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.18 },
    { name: "Raymond Cox", gender: "men", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Cheryl Jenkins", gender: "women", country: "USA", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Anthony Howard", gender: "men", country: "USA", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Denise Simmons", gender: "women", country: "USA", lang: "english", typoRate: 0.02, emojiRate: 0.3 },

    // CANADA (50) - lang: english/french mix possible but default english
    { name: "Liam Tremblay", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.1 },
    { name: "Sophie Gagnon", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.15 },
    { name: "Ethan MacDonald", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.2 },
    { name: "Isabella Roy", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Noah Bouchard", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Olivia Cote", gender: "women", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.18 },
    { name: "Lucas Gauthier", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Emma Morin", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Mason Belanger", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Ava Lavoie", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Logan Fortin", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Chloe Bergeron", gender: "women", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Jacob LeBlanc", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Mia Girard", gender: "women", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "William Simard", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Charlotte Boucher", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Alexander Caron", gender: "men", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Amelia Fournier", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Benjamin Lefebvre", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Evelyn Mercier", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Owen Beaulieu", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Abigail Gagne", gender: "women", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "James Pelletier", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Scarlett Blais", gender: "women", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Oliver Gosselin", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Grace Paquette", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Henry Lachance", gender: "men", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Lily Fontaine", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Sebastien Dube", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Aria Poirier", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Jack Couture", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Zoey Theriault", gender: "women", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Leo Villeneuve", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Hannah Michaud", gender: "women", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Felix Desjardins", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Penelope Giroux", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Gabriel Perreault", gender: "men", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Stella Cloutier", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Nathan Ouellette", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Audrey Drouin", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Adam Leblanc", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Bianca Richard", gender: "women", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Mathieu Hebert", gender: "men", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Karine Pare", gender: "women", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Patrick Bergeron", gender: "men", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Natalie Girard", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Simon Lapointe", gender: "men", country: "Canada", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Jacqueline Nadeau", gender: "women", country: "Canada", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Marc-Andre Lefevre", gender: "men", country: "Canada", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Melanie Plourde", gender: "women", country: "Canada", lang: "english", typoRate: 0.01, emojiRate: 0.3 },

    // UK (50) - lang: english, slightly higher typo for some
    { name: "Oliver Smith", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.15 },
    { name: "Emily Jones", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.2 },
    { name: "Harry Williams", gender: "men", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Amelia Taylor", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "George Davies", gender: "men", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.18 },
    { name: "Isabella Brown", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Jack Wilson", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Sophia Evans", gender: "women", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Thomas Martin", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Mia Roberts", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Charlie Thompson", gender: "men", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Grace Walker", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Oscar Hughes", gender: "men", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Poppy Edwards", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Alfie Green", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Ruby Hall", gender: "women", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Archie Wood", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Daisy Harris", gender: "women", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Freddie Clarke", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Florence Lewis", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Arthur Robinson", gender: "men", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Ella Jackson", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Leo Watson", gender: "men", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Matilda Cooper", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Theo King", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Rosie Turner", gender: "women", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Henry Ward", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Alice Baker", gender: "women", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Max Morris", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Ivy Harrison", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Edward Bennett", gender: "men", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Luna Price", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "William Barnes", gender: "men", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Harper Fox", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Sebastian Murray", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Layla Dixon", gender: "women", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Reuben Marshall", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Tilly Palmer", gender: "women", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Finley Cole", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Harriet Lane", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Jasper Nichols", gender: "men", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Mabel Knight", gender: "women", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Teddy Ellis", gender: "men", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Eliza Hopkins", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Rory Fletcher", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Molly Dean", gender: "women", country: "UK", lang: "english", typoRate: 0.04, emojiRate: 0.22 },
    { name: "Hugo Benson", gender: "men", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Iris Waters", gender: "women", country: "UK", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Felix Webb", gender: "men", country: "UK", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Lydia Chapman", gender: "women", country: "UK", lang: "english", typoRate: 0.02, emojiRate: 0.2 },

    // UAE (35) - lang: arabic, typo/emoji as desired
    { name: "Ahmed Al-Mansoori", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Fatima Al-Hashimi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Mohammed Al-Balushi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Aisha Al-Zaabi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.1, emojiRate: 0.45 },
    { name: "Rashid Al-Kaabi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Noora Al-Dhaheri", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.07, emojiRate: 0.5 },
    { name: "Khalid Bin Sulayem", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Mariam Ebrahim", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.09, emojiRate: 0.45 },
    { name: "Sultan Al-Ali", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Latifa Al-Rumaithi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Hamad Al-Qasimi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Shaikha Al-Suwaidi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.07, emojiRate: 0.45 },
    { name: "Nasser Al-Ketbi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Amna Al-Hammadi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.09, emojiRate: 0.5 },
    { name: "Abdullah Al-Mazrouei", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Reem Al-Nuaimi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Faisal Al-Otaiba", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Shamma Al-Ahbabi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.07, emojiRate: 0.5 },
    { name: "Tariq Al-Ghurair", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Hind Al-Tayer", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.09, emojiRate: 0.45 },
    { name: "Omar Al-Futtaim", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Sara Al-Maktoum", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Yousef Al-Rostamani", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Layla Al-Naboodah", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.07, emojiRate: 0.45 },
    { name: "Salem Al-Jaber", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Nadia Al-Qubaisi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.09, emojiRate: 0.5 },
    { name: "Matar Al-Muhairi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Hessa Al-Bastaki", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Juma Al-Loughani", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Maitha Al-Khaja", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.07, emojiRate: 0.5 },
    { name: "Rashid Al-Abbar", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Noura Al-Dhaen", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.09, emojiRate: 0.45 },
    { name: "Saeed Al-Hosani", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Alia Al-Mazmi", gender: "women", country: "UAE", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Marwan Al-Blooshi", gender: "men", country: "UAE", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },

    // SAUDI ARABIA (25) - lang: arabic
    { name: "Fahad Al-Otaibi", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Norah Al-Shahrani", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.07, emojiRate: 0.45 },
    { name: "Abdulaziz Al-Ghamdi", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Sara Al-Zahrani", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Turki Al-Harbi", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.03, emojiRate: 0.35 },
    { name: "Reema Al-Mutairi", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.09, emojiRate: 0.45 },
    { name: "Bandar Al-Qahtani", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.06, emojiRate: 0.4 },
    { name: "Lama Al-Subaie", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.07, emojiRate: 0.5 },
    { name: "Saud Al-Dosari", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Maha Al-Thunayan", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Khalid Al-Omar", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Noura Al-Sharif", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.09, emojiRate: 0.5 },
    { name: "Faisal Al-Shehri", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Huda Al-Amri", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.07, emojiRate: 0.45 },
    { name: "Majed Al-Malki", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.04, emojiRate: 0.4 },
    { name: "Abeer Al-Johani", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.08, emojiRate: 0.5 },
    { name: "Nawaf Al-Enezi", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.05, emojiRate: 0.3 },
    { name: "Muneera Al-Rasheed", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.09, emojiRate: 0.45 },
    { name: "Sultan Al-Faraj", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.06, emojiRate: 0.4 },
    { name: "Hind Al-Sudairi", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.07, emojiRate: 0.5 },
    { name: "Yasser Al-Turki", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.04, emojiRate: 0.35 },
    { name: "Dana Al-Abdulkarim", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.08, emojiRate: 0.45 },
    { name: "Waleed Al-Sayyari", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.05, emojiRate: 0.4 },
    { name: "Rana Al-Hamdan", gender: "women", country: "SaudiArabia", lang: "arabic", typoRate: 0.09, emojiRate: 0.5 },
    { name: "Mishaal Al-Mousa", gender: "men", country: "SaudiArabia", lang: "arabic", typoRate: 0.06, emojiRate: 0.3 },

    // MALAYSIA (20) - lang: english
    { name: "Ahmad Faizal", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Siti Nurhaliza", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Mohd Nor", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.04, emojiRate: 0.2 },
    { name: "Nurul Ain", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.01, emojiRate: 0.28 },
    { name: "Syafiq Rahim", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Wan Azizah", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Hafizuddin", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.04, emojiRate: 0.25 },
    { name: "Zulaikha Yusof", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Rizman Hashim", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.03, emojiRate: 0.18 },
    { name: "Farah Diana", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Azhar Idris", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Rosnani Ismail", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Shukri Yahaya", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Aisyah Azman", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Ridzuan Bakar", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.04, emojiRate: 0.18 },
    { name: "Fatimah Hassan", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.01, emojiRate: 0.25 },
    { name: "Zulkifli Omar", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Amirah Rahman", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.02, emojiRate: 0.22 },
    { name: "Nazrin Shah", gender: "men", country: "Malaysia", lang: "english", typoRate: 0.04, emojiRate: 0.25 },
    { name: "Syahirah Jamil", gender: "women", country: "Malaysia", lang: "english", typoRate: 0.01, emojiRate: 0.3 },

    // AUSTRALIA (16) - english
    { name: "Lachlan Nguyen", gender: "men", country: "Australia", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Charlotte White", gender: "women", country: "Australia", lang: "english", typoRate: 0.01, emojiRate: 0.15 },
    { name: "Cooper Tran", gender: "men", country: "Australia", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Mia Kelly", gender: "women", country: "Australia", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Riley Smith", gender: "men", country: "Australia", lang: "english", typoRate: 0.04, emojiRate: 0.18 },
    { name: "Isla Jones", gender: "women", country: "Australia", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Aiden Brown", gender: "men", country: "Australia", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Olivia Wilson", gender: "women", country: "Australia", lang: "english", typoRate: 0.03, emojiRate: 0.28 },
    { name: "Xavier Taylor", gender: "men", country: "Australia", lang: "english", typoRate: 0.01, emojiRate: 0.3 },
    { name: "Sienna Anderson", gender: "women", country: "Australia", lang: "english", typoRate: 0.02, emojiRate: 0.2 },
    { name: "Harrison Lee", gender: "men", country: "Australia", lang: "english", typoRate: 0.04, emojiRate: 0.15 },
    { name: "Zoe Thomas", gender: "women", country: "Australia", lang: "english", typoRate: 0.01, emojiRate: 0.22 },
    { name: "Flynn Jackson", gender: "men", country: "Australia", lang: "english", typoRate: 0.03, emojiRate: 0.25 },
    { name: "Matilda Harris", gender: "women", country: "Australia", lang: "english", typoRate: 0.02, emojiRate: 0.3 },
    { name: "Jasper Martin", gender: "men", country: "Australia", lang: "english", typoRate: 0.01, emojiRate: 0.18 },
    { name: "Sophia Clark", gender: "women", country: "Australia", lang: "english", typoRate: 0.04, emojiRate: 0.22 },

    // OTHER COUNTRIES (35) - default english
    { name: "Luis Hernandez", gender: "men", country: "Mexico", lang: "english", typoRate: 0.05, emojiRate: 0.3 },
    { name: "Maria Gonzalez", gender: "women", country: "Mexico", lang: "english", typoRate: 0.04, emojiRate: 0.35 },
    { name: "Rajesh Patel", gender: "men", country: "India", lang: "english", typoRate: 0.06, emojiRate: 0.4 },
    { name: "Priya Sharma", gender: "women", country: "India", lang: "english", typoRate: 0.03, emojiRate: 0.45 },
    { name: "Carlos Mendez", gender: "men", country: "Colombia", lang: "english", typoRate: 0.07, emojiRate: 0.3 },
    { name: "Ana Martinez", gender: "women", country: "Colombia", lang: "english", typoRate: 0.05, emojiRate: 0.35 },
    { name: "Tomas Rivera", gender: "men", country: "Philippines", lang: "english", typoRate: 0.04, emojiRate: 0.4 },
    { name: "Angel Cruz", gender: "women", country: "Philippines", lang: "english", typoRate: 0.06, emojiRate: 0.45 },
    { name: "Kwame Asante", gender: "men", country: "Ghana", lang: "english", typoRate: 0.08, emojiRate: 0.3 },
    { name: "Akosua Mensah", gender: "women", country: "Ghana", lang: "english", typoRate: 0.05, emojiRate: 0.35 },
    { name: "Petro Kowalski", gender: "men", country: "Poland", lang: "english", typoRate: 0.04, emojiRate: 0.4 },
    { name: "Magdalena Nowak", gender: "women", country: "Poland", lang: "english", typoRate: 0.06, emojiRate: 0.45 },
    { name: "Viktor Petrov", gender: "men", country: "Russia", lang: "english", typoRate: 0.07, emojiRate: 0.3 },
    { name: "Olga Ivanova", gender: "women", country: "Russia", lang: "english", typoRate: 0.05, emojiRate: 0.35 },
    { name: "Johan Eriksson", gender: "men", country: "Sweden", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Ingrid Larsson", gender: "women", country: "Sweden", lang: "english", typoRate: 0.01, emojiRate: 0.2 },
    { name: "Kenji Tanaka", gender: "men", country: "Japan", lang: "english", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Yuki Nakamura", gender: "women", country: "Japan", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Nguyen Van Minh", gender: "men", country: "Vietnam", lang: "english", typoRate: 0.05, emojiRate: 0.35 },
    { name: "Tran Thi Lan", gender: "women", country: "Vietnam", lang: "english", typoRate: 0.04, emojiRate: 0.4 },
    { name: "Sunil Fernando", gender: "men", country: "SriLanka", lang: "english", typoRate: 0.06, emojiRate: 0.45 },
    { name: "Dilani Perera", gender: "women", country: "SriLanka", lang: "english", typoRate: 0.03, emojiRate: 0.3 },
    { name: "Wei Zhang", gender: "men", country: "China", lang: "english", typoRate: 0.04, emojiRate: 0.35 },
    { name: "Mei Lin", gender: "women", country: "China", lang: "english", typoRate: 0.02, emojiRate: 0.4 },
    { name: "Andre Silva", gender: "men", country: "Brazil", lang: "english", typoRate: 0.05, emojiRate: 0.45 },
    { name: "Juliana Costa", gender: "women", country: "Brazil", lang: "english", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Ali Demir", gender: "men", country: "Turkey", lang: "english", typoRate: 0.06, emojiRate: 0.35 },
    { name: "Zeynep Yilmaz", gender: "women", country: "Turkey", lang: "english", typoRate: 0.03, emojiRate: 0.4 },
    { name: "Liam O'Brien", gender: "men", country: "Ireland", lang: "english", typoRate: 0.02, emojiRate: 0.25 },
    { name: "Aoife Murphy", gender: "women", country: "Ireland", lang: "english", typoRate: 0.01, emojiRate: 0.2 },
    { name: "Nomsa Dlamini", gender: "women", country: "SouthAfrica", lang: "english", typoRate: 0.04, emojiRate: 0.3 },
    { name: "Thabo Nkosi", gender: "men", country: "SouthAfrica", lang: "english", typoRate: 0.05, emojiRate: 0.35 },
    { name: "Sofia Martinez", gender: "women", country: "Argentina", lang: "english", typoRate: 0.03, emojiRate: 0.4 },
    { name: "Diego Fernandez", gender: "men", country: "Argentina", lang: "english", typoRate: 0.04, emojiRate: 0.45 },
    { name: "Eleni Papadopoulos", gender: "women", country: "Greece", lang: "english", typoRate: 0.02, emojiRate: 0.3 }
  ];

  // ==================== BUILD PERSONA ARRAY ====================
  const personas = remittancePersonas.map(p => {
    const initials = p.name.split(' ').map(n => n[0]).join('').toUpperCase();
    return {
      name: p.name,
      initials,
      country: p.country,
      gender: p.gender,
      isFallback: false,
      avatar: `assets/avatars/${p.name.toLowerCase().replace(/\s+/g, '_')}.jpg`,
      lang: p.lang || 'english',
      typoRate: p.typoRate ?? 0,
      emojiRate: p.emojiRate ?? 0.1
    };
  });

  // ==================== MESSAGE TEMPLATES (base) ====================
  const baseMessages = [
    "Just saved $15 on my brother's remittance from Dubai. This is life‑changing.",
    "My parents got the full amount this month. No more hidden bank fees.",
    "Started with 5 USDT, now I earn enough to cover my own bills.",
    "The live ticker shows real savings every second. I'm convinced.",
    "No more losing 8% on bank transfers. This platform is a blessing.",
    "Sent money to Sylhet yesterday – saved $12 in fees thanks to this.",
    "My sister in London uses this to send money home without charges.",
    "I used to pay $25 per transfer. Now I pay nothing and earn instead.",
    "Every month I used to lose money on fees. Not anymore.",
    "My remittance from Saudi finally arrived in full. Thank you RemitFlow!",
    "Saved $18 today on a single transfer to Dhaka. The bot works.",
    "My aunt in New York was shocked when the full $500 arrived.",
    "Three transfers this month, zero fees lost. This is the way.",
    "I've saved over $200 in remittance fees since joining.",
    "The fee capture on MYR/BDT pair was $8.40 today. It adds up!",
    "Finally a remittance solution that actually helps families.",
    "My weekly transfer to Barisal now costs me nothing in fees.",
    "The spread on AED/BDT was huge today. Captured $14.50.",
    "Sending money home used to stress me. Now it's automatic.",
    "My dad in Comilla received the exact amount I sent. First time ever.",
    "I was skeptical, but after my first fee capture I withdrew $30 immediately.",
    "Just withdrew $47 to my wallet. The process was smooth.",
    "Withdrawal request submitted at 2pm, got my USDT by 2:08pm.",
    "My third withdrawal this month. Zero issues, zero delays.",
    "Withdrew $120 in fee shares today. It's all going to my family.",
    "The withdrawal hit my Binance wallet in under 5 minutes.",
    "Requested a payout this morning, already in my account.",
    "No more waiting for days. Withdrawals are instant here.",
    "Collected my weekly fee share. $65 straight to my wallet.",
    "I've made 7 withdrawals now. Every single one was on time.",
    "The receipt feature is great – I can track every payout.",
    "Withdrew to my Trust Wallet. The TRC20 network fee was only $1.",
    "My payout history is growing. Consistency is real.",
    "First withdrawal was $12. Now I'm pulling out $80 weekly.",
    "The green checkmark on completed withdrawals is satisfying.",
    "Just collected my fee share from last week's remittance flows.",
    "No stories, no delays. Requested and received in 6 minutes.",
    "My friend didn't believe withdrawals were real until I showed him.",
    "The withdrawal process is smoother than my bank app.",
    "Another payout landed. Same speed, same reliability.",
    "The live ticker shows real savings every second. I'm convinced.",
    "Every day I see my fee share grow. Consistency wins.",
    "Just reached the Growth Tier. The returns are even better!",
    "The remittance routes update automatically. Zero stress.",
    "I love how the dashboard shows exactly where my money is working.",
    "The chart on my home screen has been climbing for weeks.",
    "Switched from Starter to Growth Tier. The daily share doubled.",
    "The interface is so clean. I can check everything in seconds.",
    "My portfolio value just crossed $500. Started with only 5 USDT.",
    "The fee capture cards show me exactly which pairs are active.",
    "I check my dashboard once a day and everything is just… growing.",
    "The community here is amazing. Real people, real savings.",
    "Finally a platform that actually shows live data, not just promises.",
    "The quick stats give me a snapshot of everything I need.",
    "I upgraded to Premium Tier last week. Best decision this year.",
    "The wallet section is so organized. TRC20 and BEP20 split clearly.",
    "My 30-day ROI is exactly what the tier card promised.",
    "The mini chart on the home screen motivates me every morning.",
    "Everything about this platform feels professional and transparent.",
    "I've been using this for 4 months. No regrets at all.",
    "Started as a test, now it's my main passive income stream.",
    "From $5 to $500 in three months. Compounding is magic.",
    "My fee share now covers my rent. I'm not joking.",
    "Quit my side hustle because this is more consistent.",
    "My friends thought I was crazy starting with 5 USDT. Now they're all joining.",
    "The extra income from fee shares paid for my daughter's school fees.",
    "I used to stress about bills. Now I just let the bot work.",
    "This platform gave me back my weekends. No more grinding.",
    "My wife was skeptical. Then she saw the withdrawals. She's a believer now.",
    "Six months in, and I've already doubled my initial liquidity.",
    "The compounding effect is real. Leave it and watch it grow.",
    "I tell everyone about this. Most don't believe until they see.",
    "My portfolio is now at $1,200. All from that first 5 USDT.",
    "I wake up to fee shares every morning. It never gets old.",
    "Financial freedom isn't a dream anymore. It's a spreadsheet.",
    "I've referred three friends. They're all seeing the same results.",
    "The growth is slow but steady. Exactly what real wealth looks like.",
    "No more begging for overtime. This is my overtime now.",
    "I'm not rich yet, but I'm not broke anymore. That's the difference.",
    "Two months ago I was desperate. Now I have options.",
    "Anyone else from Dhaka? Let's connect and share tips.",
    "The community here is amazing. Real people, real savings.",
    "I was lurking for weeks before I joined. Wish I'd started sooner.",
    "Just want to thank everyone sharing their results. It gave me courage.",
    "The support team is actually responsive. Rare these days.",
    "I've learned so much from the chat. Good people here.",
    "Seeing others withdraw gave me the confidence to try.",
    "This community kept me going when I was doubting.",
    "Hello from Toronto! Anyone else sending to Sylhet?",
    "The success stories in this group are what convinced me.",
    "New member here. Just made my first deposit. Excited!",
    "Been here since March. The growth has been amazing to watch.",
    "Shoutout to the developers. This platform is clean.",
    "The transparency in this group is refreshing.",
    "I'm from a small town in Bangladesh. This platform reached me.",
    "Anyone else using Binance for USDT deposits? Works perfectly.",
    "The referral program is nice too. Earned extra from it.",
    "Just wanted to share – upgraded to Premium and loving it.",
    "This group feels like family. Everyone wants everyone to win.",
    "I check this chat every day. It's part of my routine now.",
    "I thought this was another scam. Took me 3 weeks to try.",
    "My brother warned me. Now he's using it too.",
    "I researched for a month before depositing. Wish I'd started earlier.",
    "The live ticker was what finally convinced me. It's transparent.",
    "I tested with the bare minimum. Now I wish I'd put more.",
    "Skepticism is healthy. But at some point, you have to test it.",
    "I was burned before. This actually restored my faith.",
    "Told myself I'd try with $5 and forget about it. Best $5 ever.",
    "My cousin called it fake. Then I showed him my withdrawal history.",
    "The dashboard proof was too detailed to be fake. I had to try.",
    "I asked 20 questions before joining. The support answered all of them.",
    "The fear of losing $5 almost stopped me. So glad it didn't.",
    "Honestly, I joined just to prove it was fake. It wasn't.",
    "The transparency on fees and spreads won me over.",
    "I compared it to 5 other platforms. This was the most transparent.",
    "Skepticism is why I only put in 5 USDT at first. Smart move.",
    "I watched the community for two weeks before joining.",
    "The fact that withdrawals are instant gave me confidence.",
    "No hidden fees, no locked funds. That's what sold me.",
    "I was the biggest skeptic. Now I'm telling everyone.",
    "Start with the Starter Tier. Build from there.",
    "Don't withdraw too early. Let the fee shares compound.",
    "The Growth Tier has the best balance of risk and return.",
    "Always use TRC20 for withdrawals. Lower network fees.",
    "Set a weekly withdrawal schedule. Keeps you disciplined.",
    "Track your fee captures daily. You'll see the pattern.",
    "The 30-day ROI on Premium Tier is worth the upgrade.",
    "If you're new, just watch the ticker for a few days.",
    "Compound your earnings for at least 3 months before withdrawing.",
    "The Diaspora Tier is for serious liquidity providers only.",
    "I reinvest 70% of my fee shares. Growth is exponential.",
    "Don't check your dashboard every hour. Let it work.",
    "Use a separate wallet just for this. Keeps things organized.",
    "The key is consistency, not quick wins.",
    "Start small, prove it to yourself, then scale up.",
    "The minimum 5 USDT is perfect for testing the waters.",
    "I keep a spreadsheet of my fee shares. It's motivating.",
    "Don't let the daily numbers distract you. Think monthly.",
    "The platform rewards patience. Short-term thinkers lose.",
    "My advice: deposit, pick a tier, and forget about it for a month.",
    "I treat this like a long-term investment, not a quick flip.",
    "The ROI projections are accurate based on my experience.",
    "Diversifying across TRC20 and BEP20 wallets is smart.",
    "The platform's growth has been steady since I joined.",
    "My strategy: reinvest during the week, withdraw on weekends.",
    "The fee share model is sustainable because remittances never stop.",
    "I've calculated my average daily return at 3.2%. Consistent.",
    "The market fluctuations don't affect fee shares. That's the beauty.",
    "This isn't trading. It's capturing existing spreads. Much safer.",
    "The remittance market is $700 billion globally. Plenty of room.",
    "I've been studying the fee capture patterns. They're predictable.",
    "The growth tier gave me exactly what was promised. No surprises.",
    "I moved from Growth to Premium after 2 months of consistent results.",
    "The compounding calculator in my head is always running.",
    "I treat my liquidity like a savings account that actually grows.",
    "The 30-day lock-in actually helps with discipline.",
    "Fee shares are deposited daily. I watch the chart climb.",
    "The platform's model is genius. It solves a real problem.",
    "I've never seen a platform this transparent with fees.",
    "Remittances are recession-proof. That's why this works."
  ];

  // ==================== SLANG / ACCENT GENERATORS ====================
  function applySlang(text, lang) {
    if (lang === 'bengali') {
      return text.replace(/I /g, 'Ami ').replace(/my /g, 'amar ').replace(/ brother/, ' bhai') + ' 🇧🇩';
    }
    if (lang === 'arabic') {
      return text.replace(/I /g, 'Ana ').replace(/money/, 'floos') + ' الحمد لله';
    }
    if (lang === 'mixed') {
      return text.replace(/I /g, 'Me ').replace(/just /, 'just dey ').replace(/saved/, 'save') + ' oo';
    }
    return text;
  }

  function applyTypos(text, rate) {
    if (Math.random() > rate) return text;
    const words = text.split(' ');
    if (words.length < 3) return text;
    const idx = Math.floor(Math.random() * words.length);
    const word = words[idx];
    if (word.length > 3) {
      const chars = word.split('');
      const pos = Math.floor(Math.random() * (word.length - 1));
      [chars[pos], chars[pos + 1]] = [chars[pos + 1], chars[pos]];
      words[idx] = chars.join('');
    }
    return words.join(' ');
  }

  function applyEmoji(text, rate) {
    if (Math.random() > rate) return text;
    const emojis = ['😂', '🔥', '💸', '🙏', '🇧🇩', '💰'];
    return text + ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  }

  function generateMessage(persona) {
    let text = baseMessages[Math.floor(Math.random() * baseMessages.length)];
    text = applySlang(text, persona.lang);
    text = applyTypos(text, persona.typoRate);
    text = applyEmoji(text, persona.emojiRate);
    return text;
  }

  // ==================== REPLY TEXT GENERATOR ====================
  function getReplyText(originalSender) {
    const replies = [
      `@${originalSender} exactly!`,
      `Haha, same here @${originalSender} 😂`,
      `Totally agree @${originalSender}.`,
      `@${originalSender} I was just about to say that!`,
      `Good point @${originalSender}. How long have you been using this?`,
      `I had the same experience, @${originalSender}.`,
      `@${originalSender} yes! I was skeptical at first.`,
      `That's crazy @${originalSender}!`,
      `@${originalSender} can you share more?`,
      `That's awesome @${originalSender}!`,
      `I noticed that too, @${originalSender}.`
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ==================== DOM REFERENCES ====================
  const chatArea = document.getElementById('chatArea');
  const onlineCountEl = document.getElementById('onlineCount');
  const liveFeeValEl = document.getElementById('liveFeeVal');

  // ==================== HELPER FUNCTIONS ====================
  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function formatTime(offsetMinutes = 0) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - offsetMinutes);
    const hours = now.getHours() % 12 || 12;
    const mins = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${mins} ${ampm}`;
  }

  // ==================== RECENT MESSAGES STORE ====================
  const recentMessages = [];

  // ==================== POST MESSAGE ====================
  function postMessage(persona, isReply = false, originalMsg = null, timestampOffset = 0) {
    if (!chatArea) return;
    const time = formatTime(timestampOffset);
    let messageText;
    if (isReply && originalMsg) {
      messageText = getReplyText(originalMsg.name);
    } else {
      messageText = generateMessage(persona);
    }

    let msgHTML = '';
    if (isReply && originalMsg) {
      msgHTML += `
        <div class="chat-msg">
          <div class="reply-preview" style="border-left:3px solid var(--gold); padding-left:8px; margin-bottom:4px; font-size:0.65rem; color:var(--text3);">
            <span style="font-weight:600;color:var(--gold);">Replying to ${originalMsg.name}</span><br>
            <span style="opacity:0.7;">${originalMsg.text.length > 60 ? originalMsg.text.substring(0,60)+'...' : originalMsg.text}</span>
          </div>
          <div class="msg-sender">${persona.name} <span style="font-size:0.6rem;color:var(--text3);">(${persona.initials})</span></div>
          <div>${messageText}</div>
          <div class="msg-time">${time}</div>
        </div>
      `;
    } else {
      msgHTML = `
        <div class="chat-msg">
          <div class="msg-sender">${persona.name} <span style="font-size:0.6rem;color:var(--text3);">(${persona.initials})</span></div>
          <div>${messageText}</div>
          <div class="msg-time">${time}</div>
        </div>
      `;
    }
    chatArea.insertAdjacentHTML('beforeend', msgHTML);
    chatArea.scrollTop = chatArea.scrollHeight;

    recentMessages.push({ name: persona.name, initials: persona.initials, text: messageText });
    while (recentMessages.length > 20) recentMessages.shift();
  }

  // ==================== TYPING INDICATOR WITH VARIABLE DELAY ====================
  let typingCount = 0;
  const MAX_TYPERS = 2;

  function showTypingIndicator(persona, isReply = false, originalMsg = null) {
    if (!chatArea) return;
    if (typingCount >= MAX_TYPERS) return;
    typingCount++;

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;color:var(--gold);font-size:0.7rem;padding:4px 0;">
        <span>${persona.name} is typing</span>
        <span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>
      </div>
    `;
    chatArea.appendChild(indicator);
    chatArea.scrollTop = chatArea.scrollHeight;

    const baseDelay = 1500;
    let msgLength = isReply ? 50 : generateMessage(persona).length;
    const delay = Math.min(baseDelay + msgLength * 30, 4500);
    const finalDelay = Math.random() * 1000 + delay;

    setTimeout(() => {
      if (indicator && indicator.parentNode) indicator.remove();
      typingCount--;
      postMessage(persona, isReply, originalMsg, 0);
    }, finalDelay);
  }

  // ==================== INITIAL CHAT HISTORY ====================
  function populateInitialChat() {
    for (let i = 19; i >= 0; i--) {
      const persona = personas[randomInt(0, personas.length - 1)];
      const isReply = recentMessages.length > 0 && Math.random() < 0.25;
      let originalMsg = null;
      if (isReply) {
        originalMsg = recentMessages[randomInt(0, recentMessages.length - 1)];
        while (originalMsg && originalMsg.name === persona.name) {
          originalMsg = recentMessages[randomInt(0, recentMessages.length - 1)];
        }
      }
      const offsetMinutes = 10 + i * 2;
      postMessage(persona, isReply, originalMsg, offsetMinutes);
    }
  }

  // ==================== JOIN MESSAGES ====================
  function postJoinMessage() {
    if (!chatArea) return;
    const persona = personas[randomInt(0, personas.length - 1)];
    const time = formatTime(0);
    const msgHTML = `
      <div class="chat-msg" style="background:rgba(34,197,94,0.08); border-left:3px solid var(--green);">
        <div class="msg-sender" style="color:var(--green);">${persona.name} joined the community</div>
        <div class="msg-time">${time}</div>
      </div>
    `;
    chatArea.insertAdjacentHTML('beforeend', msgHTML);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  // ==================== MAIN CHAT LOOP ====================
  function generateChatActivity() {
    if (!chatArea || chatArea.offsetParent === null) return;

    if (Math.random() < 0.08) postJoinMessage();

    let shouldReply = false;
    let originalMsg = null;
    if (recentMessages.length >= 2 && Math.random() < 0.3) {
      originalMsg = recentMessages[randomInt(0, recentMessages.length - 1)];
      shouldReply = true;
    }

    let persona = personas[randomInt(0, personas.length - 1)];
    if (shouldReply && originalMsg && persona.name === originalMsg.name) {
      const filtered = personas.filter(p => p.name !== originalMsg.name);
      persona = filtered[randomInt(0, filtered.length - 1)];
    }

    if (typingCount < MAX_TYPERS) {
      showTypingIndicator(persona, shouldReply, originalMsg);
    }

    if (Math.random() < 0.3 && typingCount < MAX_TYPERS) {
      let persona2 = personas[randomInt(0, personas.length - 1)];
      if (shouldReply && originalMsg && persona2.name === originalMsg.name) {
        persona2 = personas.filter(p => p.name !== originalMsg.name)[randomInt(0, personas.length - 2)];
      }
      showTypingIndicator(persona2, false, null);
    }
  }

  // ==================== LIVE STATS ====================
  if (onlineCountEl) {
    setInterval(() => {
      onlineCountEl.textContent = randomInt(400, 800).toString();
    }, 30000);
  }
  if (liveFeeValEl) {
    setInterval(() => {
      liveFeeValEl.textContent = `$${(Math.random() * 10 + 1).toFixed(2)}`;
    }, 5000);
  }

  // ==================== STARTUP ====================
  let initialChatLoaded = false;
  window.initCommunityChat = function() {
    if (initialChatLoaded) return;
    initialChatLoaded = true;
    populateInitialChat();
  };

  window.addRandomRemittanceChat = function() {
    // not needed with loop
  };

  setTimeout(() => {
    setInterval(() => {
      if (chatArea && chatArea.offsetParent !== null) {
        generateChatActivity();
      }
    }, 3500);
  }, 2000);

  console.log('RemitFlow AI community loaded – slang, typos, variable delays, timestamps, replies, join messages');
})();

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create(title: "Remember to poop", body: "need fiber", done: "false")
Todo.create(title: "Remember to slep", body: "need slep", done: "false")
Todo.create(title: "Remember to eat", body: "need füd", done: "false")
Todo.create(title: "Remember to drank", body: "need drank", done: "true")

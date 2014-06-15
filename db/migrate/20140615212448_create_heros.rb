class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heroes do |t|
      t.string :name
      t.text :quote
      t.integer :strength
      t.integer :intellect
      t.integer :dexterity
      t.integer :agility

      t.timestamps
    end
  end
end

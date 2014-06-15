class CreateScenarios < ActiveRecord::Migration
  def change
    create_table :scenarios do |t|
      t.string :name
      t.string :weakness

      t.timestamps
    end
  end
end

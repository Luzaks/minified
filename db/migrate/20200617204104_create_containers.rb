class CreateContainers < ActiveRecord::Migration[6.0]
  def change
    create_table :containers do |t|
      t.string :title
      t.string :description
      t.belongs_to :section, null: false, foreign_key: true

      t.timestamps
    end
  end
end
